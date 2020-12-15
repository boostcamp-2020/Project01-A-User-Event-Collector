import prisma from "../../prisma";

const getPlaylistById = async (
  id: number,
  user: any
): Promise<Object | null> => {
  const playlist: any = await prisma.playlists.findUnique({
    where: { id },
    include: {
      Users: {
        select: { username: true },
      },
    },
  });
  if (!playlist) return null;

  const trackIdArr = await prisma.playlists_Tracks.findMany({
    where: { playlistId: id },
    orderBy: { playlistTrackNumber: "asc" },
    include: {
      Tracks: {
        include: {
          Albums: {
            include: {
              Users_Like_Albums: { where: { userId: user ? user.id : -1 } },
            },
          },
          Artists_Tracks: {
            include: {
              Artists: {
                select: {
                  id: true,
                  artistName: true,
                },
              },
            },
          },
          Users_Like_Tracks: {
            where: { userId: user ? user.id : -1 },
          },
        },
      },
    },
  });
  const tracks: any = [];
  trackIdArr.forEach((el) => tracks.push(el.Tracks));
  playlist.Tracks = tracks;
  playlist.Tracks.forEach((el) => {
    el.Artists = [];
    el.Artists_Tracks.forEach((artist) => el.Artists.push(artist.Artists));
    delete el.Artists_Tracks;
    el.Liked = el.Users_Like_Tracks.length > 0;
    delete el.Users_Like_Tracks;
    el.Albums.Liked = el.Albums.Users_Like_Albums.length > 0;
    delete el.Albums.Users_Like_Albums;
  });

  return playlist;
};

export default getPlaylistById;

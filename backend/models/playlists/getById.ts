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
          Albums: true,
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
  });

  return playlist;
};

export default getPlaylistById;

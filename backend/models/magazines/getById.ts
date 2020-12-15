import prisma from "../../prisma";

const getMagazineById = async (
  id: number,
  user: any
): Promise<Object | null> => {
  const magazine: any = await prisma.magazines.findUnique({ where: { id } });
  if (!magazine) return null;

  const trackIdArr = await prisma.playlists_Tracks.findMany({
    where: { playlistId: magazine.playlistId },
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
  magazine.Tracks = tracks;
  magazine.Tracks.forEach((el) => {
    el.Artists = [];
    el.Artists_Tracks.forEach((artist) => el.Artists.push(artist.Artists));
    delete el.Artists_Tracks;
    el.Liked = el.Users_Like_Tracks.length > 0;
    delete el.Users_Like_Tracks;
    el.Albums.Liked = el.Albums.Users_Like_Albums.length > 0;
    delete el.Albums.Users_Like_Albums;
  });

  return magazine;
};

export default getMagazineById;

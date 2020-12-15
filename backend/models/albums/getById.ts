import prisma from "../../prisma";

const getAlbumById = async (id: number, user: any): Promise<Object | null> => {
  const album: any = await prisma.albums.findUnique({
    where: { id },
    include: {
      Artists: {
        select: { artistName: true },
      },
      Users_Like_Albums: { where: { userId: user ? user.id : -1 } },
    },
  });
  if (!album) return null;

  const trackIdArr = await prisma.tracks.findMany({
    where: { albumId: id },
    orderBy: { albumTrackNumber: "asc" },
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
  });
  album.Liked = album.Users_Like_Albums.length > 0;
  delete album.Users_Like_Albums;
  album.Tracks = trackIdArr;
  album.Tracks.forEach((el) => {
    el.Artists = [];
    el.Artists_Tracks.forEach((artist) => el.Artists.push(artist.Artists));
    delete el.Artists_Tracks;
    el.Liked = el.Users_Like_Tracks.length > 0;
    delete el.Users_Like_Tracks;
    el.Albums.Liked = el.Albums.Users_Like_Albums.length > 0;
    delete el.Albums.Users_Like_Albums;
  });

  return album;
};

export default getAlbumById;

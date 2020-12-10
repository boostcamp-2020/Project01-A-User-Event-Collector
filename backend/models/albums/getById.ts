import prisma from "../../prisma";

const getAlbumById = async (id: number): Promise<Object | null> => {
  const album: any = await prisma.albums.findUnique({
    where: { id },
    include: {
      Artists: {
        select: { artistName: true },
      },
    },
  });
  if (!album) return null;

  const trackIdArr = await prisma.tracks.findMany({
    where: { albumId: id },
    orderBy: { albumTrackNumber: "asc" },
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
    },
  });
  album.Tracks = trackIdArr;

  return album;
};

export default getAlbumById;

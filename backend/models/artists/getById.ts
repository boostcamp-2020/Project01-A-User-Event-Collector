import prisma from "../../prisma";

const getArtistById = async (id: number): Promise<Object | null> => {
  const artist: any = await prisma.artists.findUnique({ where: { id } });
  if (!artist) return null;
  const trackIdArr = await prisma.tracks.findMany({
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
  artist.Tracks = trackIdArr;
  return artist;
};

export default getArtistById;

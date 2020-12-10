import prisma from "../../prisma";

const getMagazineById = async (id: number): Promise<Object | null> => {
  const magazine: any = await prisma.magazines.findUnique({ where: { id } });
  if (!magazine) return null;

  const trackIdArr = await prisma.playlists_Tracks.findMany({
    where: { playlistId: magazine.playlistId },
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
        },
      },
    },
  });
  magazine.Tracks = trackIdArr;

  return magazine;
};

export default getMagazineById;

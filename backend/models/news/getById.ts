import prisma from "../../prisma";

const getNewsById = async (id: number): Promise<Object | null> => {
  const news: any = await prisma.news.findUnique({ where: { id } });
  if (!news) return null;

  const trackIdArr = await prisma.playlists_Tracks.findMany({
    where: { playlistId: news.playlistId },
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
  news.Tracks = trackIdArr;

  return news;
};

export default getNewsById;

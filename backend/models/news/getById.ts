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
  const tracks: any = [];
  trackIdArr.forEach((el) => tracks.push(el.Tracks));
  news.Tracks = tracks;
  news.Tracks.forEach((el) => {
    el.Artists = [];
    el.Artists_Tracks.forEach((artist) => el.Artists.push(artist));
    delete el.Artists_Tracks;
  });

  return news;
};

export default getNewsById;

import prisma from "../../../prisma";
import { getTrackCard } from "../tracks";

const getNewsById = async (id: number): Promise<Object | null> => {
  const news: any = await prisma.news.findUnique({ where: { id } });
  if (!news) return null;

  const trackIdArr: any = await prisma.playlists_Tracks.findMany({
    where: { playlistId: news.playlistId },
    orderBy: { playlistTrackNumber: "asc" },
  });
  news.Tracks = await Promise.all(trackIdArr.map((elem: any) => getTrackCard(elem.trackId)));

  return news;
};

export default getNewsById;

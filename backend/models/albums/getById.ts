import prisma from "../../prisma";
import { getTrackCard } from "../tracks";

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
  });
  album.Tracks = await Promise.all(
    trackIdArr.map((elem: any) => getTrackCard(elem.id))
  );

  return album;
};

export default getAlbumById;

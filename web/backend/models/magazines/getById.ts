import prisma from "../../../prisma";
import getTrackCardData from "../tracks";

const getMagazineById = async (id: number): Promise<Object | null> => {
  const magazine: any = await prisma.magazines.findUnique({ where: { id } });
  if (!magazine) return null;

  const trackIdArr: any = await prisma.playlists_Tracks.findMany({
    where: { playlistId: magazine.playlistId },
    orderBy: { playlistTrackNumber: "asc" },
  });
  magazine.Tracks = await Promise.all(
    trackIdArr.map((elem: any) => getTrackCardData(elem.trackId)),
  );

  return magazine;
};

export default getMagazineById;

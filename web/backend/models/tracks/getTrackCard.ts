import prisma from "../../../prisma";

const getTrackCardData = async (id: number): Promise<Object | null> => {
  const track: any = await prisma.tracks.findUnique({
    where: { id },
    include: { Albums: true },
  });
  if (!track) return null;

  const artistIdArr = await prisma.artists_Tracks.findMany({
    where: { trackId: id },
  });
  track.Artists = await Promise.all(
    artistIdArr.map((elem: any) => prisma.artists.findUnique({ where: { id: elem.artistId } })),
  );

  return track;
};

export default getTrackCardData;

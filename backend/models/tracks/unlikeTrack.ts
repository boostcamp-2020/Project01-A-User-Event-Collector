import prisma from "../../prisma";

const unlikeTrack = async (
  trackId: number,
  user: any | undefined
): Promise<Object | null> => {
  const track: any = await prisma.users_Like_Tracks.findFirst({
    where: { trackId },
  });
  if (!track && !user) return null;

  const result = await prisma.users_Like_Tracks.delete({
    where: {
      id: track.id,
    },
  });

  return result;
};

export default unlikeTrack;

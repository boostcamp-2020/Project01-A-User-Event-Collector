import prisma from "../../prisma";
import { getTrackCard } from "../tracks";

const getUserLikeTracks = async (id: number): Promise<Object> => {
  const trackIdArr: any = await prisma.users_Like_Tracks.findMany({
    where: { userId: id },
  });
  const tracks: any = await Promise.all(
    trackIdArr.map((elem: any) => getTrackCard(elem.trackId))
  );
  return tracks;
};

export default getUserLikeTracks;

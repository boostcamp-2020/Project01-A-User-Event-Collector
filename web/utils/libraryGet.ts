import prisma from "./prisma";
import { getTrackCardData } from "./test";

const getUserLikeTracks = async (id: number): Promise<Object> => {
  const trackIdArr: any = await prisma.users_Like_Tracks.findMany({ where: { userId: id } });
  const tracks: any = await Promise.all(
    trackIdArr.map((elem: any) => getTrackCardData(elem.trackId)),
  );

  return tracks;
};

const getUserLikeAlbums = async () => {};

export { getUserLikeTracks, getUserLikeAlbums };

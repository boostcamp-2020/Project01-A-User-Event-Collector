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

const postUserLikeTracks = async (
  userId: number,
  albumId: number
): Promise<void> => {
  try {
    await prisma.users_Like_Albums.create({
      data: {
        Users: {
          connect: { id: userId },
        },
        Albums: {
          connect: { id: albumId },
        },
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export { getUserLikeTracks, postUserLikeTracks };

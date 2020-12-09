import prisma from "../../prisma";

const getUserLikeArtists = async (id: number): Promise<Object> => {
  const aritstsWithRelation = await prisma.users_Like_Artists.findMany({
    where: { userId: id },
    include: { Artists: true },
  });
  const artists = aritstsWithRelation.map((elem) => elem.Artists);
  return artists;
};

const postUserLikeArtists = async (
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

export { getUserLikeArtists, postUserLikeArtists };

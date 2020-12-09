import prisma from "../../prisma";

const getUserLikeAlbums = async (id: number): Promise<Object> => {
  const albumsWithRelation = await prisma.users_Like_Albums.findMany({
    where: { userId: id },
    include: { Albums: true },
  });
  const albums = albumsWithRelation.map((elem) => elem.Albums);
  return albums;
};

const postUserLikeAlbums = async (
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
export { getUserLikeAlbums, postUserLikeAlbums };

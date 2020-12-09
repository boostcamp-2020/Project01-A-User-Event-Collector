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
): Promise<String | Error> => {
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
    return "Success Post";
  } catch (err) {
    return new Error("Fail Post");
  }
};
export { getUserLikeAlbums, postUserLikeAlbums };

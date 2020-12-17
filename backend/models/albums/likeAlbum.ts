import prisma from "../../prisma";

const likeAlbum = async (
  albumId: number,
  user: any | undefined
): Promise<Object | null> => {
  const album: any = await prisma.users_Like_Albums.findFirst({
    where: { albumId },
  });
  if (album && !user) return null;

  const result = await prisma.users_Like_Albums.create({
    data: {
      Albums: {
        connect: {
          id: albumId,
        },
      },
      Users: {
        connect: {
          id: user.id,
        },
      },
    },
  });

  return result;
};

export default likeAlbum;

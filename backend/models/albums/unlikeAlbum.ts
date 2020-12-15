import prisma from "../../prisma";

const unlikeAlbum = async (
  albumId: number,
  user: any | undefined
): Promise<Object | null> => {
  const album: any = await prisma.users_Like_Albums.findFirst({
    where: { albumId },
  });
  if (!album && !user) return null;

  const result = await prisma.users_Like_Albums.delete({
    where: {
      id: album.id,
    },
  });

  return result;
};

export default unlikeAlbum;

import prisma from "../../prisma";

const getUserLikeAlbums = async (id: number): Promise<Object> => {
  const albumsWithRelation = await prisma.users_Like_Albums.findMany({
    where: { userId: id },
    include: { Albums: true },
  });
  const albums = albumsWithRelation.map((elem) => elem.Albums);
  return albums;
};

export default getUserLikeAlbums;

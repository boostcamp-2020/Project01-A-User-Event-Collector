import prisma from "../../prisma";

const getAlbumCovers = async (user: any): Promise<Object> => {
  const optObj = {
    include: {
      Artists: {
        include: {
          Users_Like_Artists: { where: { userId: user ? user.id : -1 } },
        },
      },
      Users_Like_Albums: { where: { userId: user ? user.id : -1 } },
    },
  };
  const result = await prisma.albums.findMany(optObj);
  result.forEach((album) => {
    album.Liked = album.Users_Like_Albums.length > 0;
    delete album.Users_Like_Albums;
  });
  return result;
};

export default getAlbumCovers;

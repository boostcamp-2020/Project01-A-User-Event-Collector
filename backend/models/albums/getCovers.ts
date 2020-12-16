import prisma from "../../prisma";

const getAlbumCovers = async (optObj: any): Promise<Object> => {
  // eslint-disable-next-line no-param-reassign
  optObj.include = {
    Artists: {
      select: { artistName: true },
    },
  };
  const result = await prisma.albums.findMany(optObj);
  return result;
};

// const getAlbumCovers = async (user: any): Promise<Object> => {
//   const optObj = {
//     include: {
//       Artists: {
//         include: {
//           Users_Like_Artists: { where: { userId: user ? user.id : -1 } },
//         },
//       },
//       Users_Like_Albums: { where: { userId: user ? user.id : -1 } },
//     },
//   };
//   const result = await prisma.albums.findMany(optObj);
//   result.forEach((album) => {
//     album.Liked = album.Users_Like_Albums.length > 0;
//     delete album.Users_Like_Albums;
//   });
//   return result;
// };

export default getAlbumCovers;

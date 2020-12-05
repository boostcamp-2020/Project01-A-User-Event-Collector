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

export default getAlbumCovers;

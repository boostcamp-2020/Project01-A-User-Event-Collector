import prisma from "../../../prisma";

const getAlbumCovers = async (optObj: Object): Promise<Object> => {
  const result = await prisma.albums.findMany(optObj);
  return result;
};

export default getAlbumCovers;

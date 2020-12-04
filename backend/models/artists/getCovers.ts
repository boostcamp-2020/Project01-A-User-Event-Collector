import prisma from "../../prisma";

const getArtistCovers = async (optObj: Object): Promise<Object> => {
  const result = await prisma.artists.findMany(optObj);
  return result;
};

export default getArtistCovers;

import prisma from "../../prisma";

const getArtistCovers = async (optObj: any): Promise<Object> => {
  // eslint-disable-next-line no-param-reassign
  optObj.include = {
    Albums: {
      select: { albumName: true },
    },
  };
  const result = await prisma.artists.findMany(optObj);
  return result;
};

export default getArtistCovers;

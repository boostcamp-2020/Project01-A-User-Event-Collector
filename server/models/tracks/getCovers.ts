import prisma from "../../prisma";

const getTrackCovers = async (optObj: any): Promise<Object> => {
  // eslint-disable-next-line no-param-reassign
  optObj.include = {
    Albums: {
      select: { cover: true },
    },
  };
  const result = await prisma.tracks.findMany(optObj);
  return result;
};

export default getTrackCovers;

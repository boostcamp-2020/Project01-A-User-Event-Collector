import prisma from "../../../prisma";

const getTrackCovers = async (optObj: Object): Promise<Object> => {
  const result = await prisma.tracks.findMany(optObj);
  return result;
};

export default getTrackCovers;

import prisma from "../../../prisma";

const getDjStationCovers = async (optObj: Object): Promise<Object> => {
  const result = await prisma.dJStations.findMany(optObj);
  return result;
};

export default getDjStationCovers;

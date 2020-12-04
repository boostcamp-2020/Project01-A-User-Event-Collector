import prisma from "../../prisma";

const getNewsCovers = async (optObj: Object): Promise<Object> => {
  const result = await prisma.news.findMany(optObj);
  return result;
};

export default getNewsCovers;

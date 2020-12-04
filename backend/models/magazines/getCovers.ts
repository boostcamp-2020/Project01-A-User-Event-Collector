import prisma from "../../prisma";

const getMagazineCovers = async (optObj: Object): Promise<Object> => {
  const result = await prisma.magazines.findMany(optObj);
  return result;
};

export default getMagazineCovers;

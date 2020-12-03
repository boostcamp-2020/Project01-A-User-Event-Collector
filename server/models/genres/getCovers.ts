import prisma from "../../prisma";

const getGenreCovers = async (): Promise<Object> => {
  const result = await prisma.genres.findMany();
  return result;
};

export default getGenreCovers;

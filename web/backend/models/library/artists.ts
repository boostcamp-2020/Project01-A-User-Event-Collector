import prisma from "../../../prisma";

const getUserLikeArtists = async (id: number): Promise<Object> => {
  const aritstsWithRelation = await prisma.users_Like_Artists.findMany({
    where: { userId: id },
    include: { Artists: true },
  });
  const artists = aritstsWithRelation.map((elem) => elem.Artists);
  return artists;
};

export default getUserLikeArtists;

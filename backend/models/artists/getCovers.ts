import prisma from "../../prisma";

const getArtistCovers = async (user: any): Promise<Object> => {
  const result = await prisma.artists.findMany({
    include: {
      Users_Like_Artists: { where: { userId: user ? user.id : -1 } },
    },
  });
  result.forEach((artist) => {
    artist.Liked = artist.Users_Like_Artists.length > 0;
    delete artist.Users_Like_Artists;
  });
  return result;
};

export default getArtistCovers;

import prisma from "../../prisma";

const likeArtist = async (
  artistId: number,
  user: any | undefined
): Promise<Object | null> => {
  const artist: any = await prisma.users_Like_Artists.findFirst({
    where: { artistId },
  });
  if (artist && !user) return null;

  const result = await prisma.users_Like_Artists.create({
    data: {
      Artists: {
        connect: {
          id: artistId,
        },
      },
      Users: {
        connect: {
          id: user.id,
        },
      },
    },
  });

  return result;
};

export default likeArtist;

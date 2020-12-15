import prisma from "../../prisma";

const unlikeArtist = async (
  artistId: number,
  user: any | undefined
): Promise<Object | null> => {
  const artist: any = await prisma.users_Like_Artists.findFirst({
    where: { artistId },
  });
  if (!artist && !user) return null;

  const result = await prisma.users_Like_Artists.delete({
    where: {
      id: artist.id,
    },
  });

  return result;
};

export default unlikeArtist;

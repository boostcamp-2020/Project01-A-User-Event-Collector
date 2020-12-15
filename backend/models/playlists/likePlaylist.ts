import prisma from "../../prisma";

const likePlaylist = async (
  playlistId: number,
  user: any | undefined
): Promise<Object | null> => {
  const playlist: any = await prisma.users_Likes_Playlists.findFirst({
    where: { playlistId },
  });
  if (playlist && !user) return null;

  const result = await prisma.users_Likes_Playlists.create({
    data: {
      Playlists: {
        connect: {
          id: playlistId,
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

export default likePlaylist;

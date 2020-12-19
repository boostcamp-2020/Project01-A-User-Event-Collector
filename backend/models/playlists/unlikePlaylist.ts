import prisma from "../../prisma";

const unlikePlaylist = async (
  playlistId: number,
  user: any | undefined
): Promise<Object | null> => {
  const playlist: any = await prisma.users_Likes_Playlists.findFirst({
    where: { playlistId },
  });
  if (!playlist && !user) return null;

  const result = await prisma.users_Likes_Playlists.delete({
    where: {
      id: playlist.id,
    },
  });

  return result;
};

export default unlikePlaylist;

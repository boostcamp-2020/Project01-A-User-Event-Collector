import prisma from "../../prisma";

const getUserLikePlaylists = async (id: number): Promise<Object> => {
  const playlistsWithRelation = await prisma.users_Likes_Playlists.findMany({
    where: { userId: id },
    include: { Playlists: true },
  });
  const playlists = playlistsWithRelation.map((elem) => elem.Playlists);
  return playlists;
};

export default getUserLikePlaylists;

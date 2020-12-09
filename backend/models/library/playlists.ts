import prisma from "../../prisma";

const getUserLikePlaylists = async (id: number): Promise<Object> => {
  const playlistsWithRelation = await prisma.users_Likes_Playlists.findMany({
    where: { userId: id },
    include: { Playlists: true },
  });
  const playlists = playlistsWithRelation.map((elem) => elem.Playlists);
  return playlists;
};

const postUserLikePlaylists = async (
  userId: number,
  albumId: number
): Promise<void> => {
  try {
    await prisma.users_Like_Albums.create({
      data: {
        Users: {
          connect: { id: userId },
        },
        Albums: {
          connect: { id: albumId },
        },
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export { getUserLikePlaylists, postUserLikePlaylists };

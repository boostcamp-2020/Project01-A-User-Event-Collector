import prisma from "../../prisma";

const getUserLikePlaylists = async (id: number): Promise<Object> => {
  const playlistsWithRelation = await prisma.users_Likes_Playlists.findMany({
    where: { userId: id },
    include: {
      Playlists: {
        include: {
          Users: { select: { username: true } },
        },
      },
    },
  });
  const playlists = playlistsWithRelation.map((elem) => elem.Playlists);
  return playlists;
};

const postUserLikePlaylists = async (
  userId: number,
  playlistsId: number
): Promise<String | Error> => {
  try {
    await prisma.users_Likes_Playlists.create({
      data: {
        Users: {
          connect: { id: userId },
        },
        Playlists: {
          connect: { id: playlistsId },
        },
      },
    });
    return "Success Post";
  } catch (err) {
    return new Error("Fail Post");
  }
};
const deleteUserLikePlaylists = async (
  userId: number,
  playlistId: number
): Promise<String | Error> => {
  try {
    await prisma.users_Likes_Playlists.deleteMany({
      where: {
        userId,
        playlistId,
      },
    });
    return "Success Delete";
  } catch (err) {
    return new Error("Fail Delete");
  }
};

export { getUserLikePlaylists, postUserLikePlaylists, deleteUserLikePlaylists };

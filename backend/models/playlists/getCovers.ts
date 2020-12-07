import prisma from "../../prisma";

const getPlaylistCovers = async (optObj: any): Promise<Object> => {
  // eslint-disable-next-line no-param-reassign
  optObj.include = {
    Users: {
      select: { username: true },
    },
  };
  const result = await prisma.playlists.findMany(optObj);
  return result;
};

export default getPlaylistCovers;

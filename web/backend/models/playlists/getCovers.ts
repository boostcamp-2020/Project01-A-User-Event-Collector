import prisma from "../../../prisma";

const getPlaylistCovers = async (optObj: Object): Promise<Object> => {
  const result = await prisma.playlists.findMany(optObj);
  return result;
};

export default getPlaylistCovers;

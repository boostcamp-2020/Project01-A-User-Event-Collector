import prisma from "../../prisma";

const getTrackForSearch = async (optObj: any): Promise<Object> => {
  // eslint-disable-next-line no-param-reassign
  optObj.include = {
    Albums: {
      select: { cover: true, albumName: true },
    },
    Artists_Tracks: {
      include: {
        Artists: {
          select: { artistName: true },
        },
      },
    },
  };
  const result = await prisma.tracks.findMany(optObj);
  return result;
};

export default getTrackForSearch;

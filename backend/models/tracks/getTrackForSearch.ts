import prisma from "../../prisma";

const getTrackForSearch = async (optObj: any, user: any): Promise<Object> => {
  // eslint-disable-next-line no-param-reassign
  optObj.include = {
    Albums: {
      select: { cover: true, albumName: true },
    },
    Artists_Tracks: {
      include: {
        Artists: {
          select: { id: true, artistName: true },
        },
      },
    },
    Users_Like_Tracks: {
      where: { userId: user ? user.id : -1 },
    },
  };
  const result = await prisma.tracks.findMany(optObj);
  result.forEach((el) => {
    el.Artists = [];
    el.Artists_Tracks.forEach((artist) => el.Artists.push(artist.Artists));
    delete el.Artists_Tracks;
  });
  return result;
};

export default getTrackForSearch;

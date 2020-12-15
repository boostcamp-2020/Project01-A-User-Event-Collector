import prisma from "../../prisma";

const getTrackForSearch = async (optObj: any, user: any): Promise<Object> => {
  // eslint-disable-next-line no-param-reassign
  optObj.include = {
    Albums: {
      include: {
        Users_Like_Albums: { where: { userId: user ? user.id : -1 } },
      },
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
    el.Liked = el.Users_Like_Tracks.length > 0;
    delete el.Users_Like_Tracks;
    el.Albums.Liked = el.Albums.Users_Like_Albums.length > 0;
    delete el.Albums.Users_Like_Albums;
  });
  return result;
};

export default getTrackForSearch;

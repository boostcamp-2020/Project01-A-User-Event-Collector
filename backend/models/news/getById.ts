import prisma from "../../prisma";

const getNewsById = async (id: number, user: any): Promise<Object | null> => {
  const news: any = await prisma.news.findUnique({ where: { id } });
  if (!news) return null;

  const trackIdArr = await prisma.playlists_Tracks.findMany({
    where: { playlistId: news.playlistId },
    orderBy: { playlistTrackNumber: "asc" },
    include: {
      Tracks: {
        include: {
          Albums: {
            include: {
              Users_Like_Albums: { where: { userId: user ? user.id : -1 } },
            },
          },
          Artists_Tracks: {
            include: {
              Artists: {
                include: {
                  Users_Like_Artists: {
                    where: { userId: user ? user.id : -1 },
                  },
                },
              },
            },
          },
          Users_Like_Tracks: {
            where: { userId: user ? user.id : -1 },
          },
        },
      },
    },
  });
  const tracks: any = [];
  trackIdArr.forEach((el) => tracks.push(el.Tracks));
  news.Tracks = tracks;
  news.Tracks.forEach((el) => {
    el.Artists = [];
    el.Artists_Tracks.forEach((artist) => el.Artists.push(artist.Artists));
    delete el.Artists_Tracks;
    el.Artists.forEach((artist) => {
      artist.Liked = artist.Users_Like_Artists.length > 0;
      delete artist.Users_Like_Artists;
    });
    el.Liked = el.Users_Like_Tracks.length > 0;
    delete el.Users_Like_Tracks;
    el.Albums.Liked = el.Albums.Users_Like_Albums.length > 0;
    delete el.Albums.Users_Like_Albums;
  });

  return news;
};

export default getNewsById;

import prisma from "../../prisma";

const getArtistById = async (id: number, user: any): Promise<Object | null> => {
  const artist: any = await prisma.artists.findUnique({
    where: { id },
    include: {
      Users_Like_Artists: { where: { userId: user ? user.id : -1 } },
    },
  });
  if (!artist) return null;
  const trackIdArr = await prisma.artists_Tracks.findMany({
    where: { artistId: artist.id },
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
                select: {
                  id: true,
                  artistName: true,
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
  artist.Liked = artist.Users_Like_Artists.length > 0;
  delete artist.Users_Like_Artists;
  artist.Tracks = tracks;
  artist.Tracks.forEach((el) => {
    el.Artists = [];
    el.Artists_Tracks.forEach((artist) => el.Artists.push(artist.Artists));
    delete el.Artists_Tracks;
    el.Liked = el.Users_Like_Tracks.length > 0;
    delete el.Users_Like_Tracks;
    el.Albums.Liked = el.Albums.Users_Like_Albums.length > 0;
    delete el.Albums.Users_Like_Albums;
  });
  return artist;
};

export default getArtistById;

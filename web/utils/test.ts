import prisma from "./prisma";

const getTrackCardData = async (id: number): Promise<Object | null> => {
  const track: any = await prisma.tracks.findUnique({
    where: { id },
    include: { Albums: true },
  });
  if (!track) return null;

  const artistIdArr = await prisma.artists_Tracks.findMany({
    where: { trackId: id },
  });
  track.Artists = await Promise.all(
    artistIdArr.map((elem: any) => prisma.artists.findUnique({ where: { id: elem.artistId } })),
  );

  return track;
};

const getPlaylistPageData = async (id: number): Promise<Object | null> => {
  const playlist: any = await prisma.playlists.findUnique({ where: { id } });
  if (!playlist) return null;

  const trackIdArr = await prisma.playlists_Tracks.findMany({
    where: { playlistId: id },
    orderBy: { playlistTrackNumber: "asc" },
  });
  playlist.Tracks = await Promise.all(
    trackIdArr.map((elem: any) => getTrackCardData(elem.trackId)),
  );

  return playlist;
};

const getArtistPageData = async (id: number): Promise<Object | null> => {
  const artist: any = await prisma.artists.findUnique({ where: { id } });
  if (!artist) return null;
  artist.Albums = await prisma.albums.findMany({ where: { artistId: id } });

  const trackIdArr = await prisma.artists_Tracks.findMany({
    where: { artistId: id },
  });
  artist.Tracks = await Promise.all(trackIdArr.map((elem: any) => getTrackCardData(elem.trackId)));

  return artist;
};

const getMagazinePageData = async (id: number): Promise<Object | null> => {
  const magazine: any = await prisma.magazines.findUnique({ where: { id } });
  if (!magazine) return null;

  const trackIdArr: any = await prisma.playlists_Tracks.findMany({
    where: { playlistId: magazine.playlistId },
    orderBy: { playlistTrackNumber: "asc" },
  });
  magazine.Tracks = await Promise.all(
    trackIdArr.map((elem: any) => getTrackCardData(elem.trackId)),
  );

  return magazine;
};

const getAlbumPageData = async (id: number): Promise<Object | null> => {
  const album: any = await prisma.albums.findUnique({ where: { id } });

  if (!album) return null;

  const trackIdArr: any = await prisma.playlists_Tracks.findMany({
    where: { playlistId: album.playlistId },
    orderBy: { playlistTrackNumber: "asc" },
  });
  album.Tracks = await Promise.all(trackIdArr.map((elem: any) => getTrackCardData(elem.trackId)));

  return album;
};

const getGenrePageData = async (id: number): Promise<Object | null> => {
  const genre: any = await prisma.genres.findUnique({ where: { id } });
  if (!genre) return null;

  const trackIds: any = await prisma.tracks_Genres.findMany({
    where: { genreId: id },
  });
  genre.Tracks = await Promise.all(trackIds.map((elem: any) => getTrackCardData(elem.trackId)));
  const albumIds: any = await prisma.albums_Genres.findMany({
    where: { genreId: id },
  });
  genre.Albums = await Promise.all(
    albumIds.map((elem: any) => prisma.albums.findMany({ where: { id: elem.albumId } })),
  );
  const artistIds: any = await prisma.artists_Genres.findMany({
    where: { genreId: id },
  });
  genre.Artists = await Promise.all(
    artistIds.map((elem: any) => prisma.artists.findMany({ where: { id: elem.artistId } })),
  );

  return genre;
};

const getNewsPageData = async (id: number): Promise<Object | null> => {
  const news: any = await prisma.news.findUnique({ where: { id } });
  if (!news) return null;

  const trackIdArr: any = await prisma.playlists_Tracks.findMany({
    where: { playlistId: news.playlistId },
    orderBy: { playlistTrackNumber: "asc" },
  });
  news.Tracks = await Promise.all(trackIdArr.map((elem: any) => getTrackCardData(elem.trackId)));

  return news;
};

interface UserInfo {
  username?: string;
  password?: string;
}

const createUser = async ({ username, password }: UserInfo) => {
  if (!username || !password) return;
  const user = await prisma.users.create({ data: { username, password } });
  return user;
};

const getUserInfoData = async ({ username, password }: UserInfo) => {
  const userInfo = await prisma.users.findFirst({
    where: { username, password },
    select: {
      id: true,
      username: true,
    },
  });
  return userInfo;
};

export {
  getTrackCardData,
  getPlaylistPageData,
  getArtistPageData,
  getMagazinePageData,
  getAlbumPageData,
  getGenrePageData,
  getNewsPageData,
  createUser,
  getUserInfoData,
};

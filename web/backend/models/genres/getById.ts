import prisma from "../../../prisma";
import getTrackCardData from "../tracks";

const getGenreById = async (id: number): Promise<Object | null> => {
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

export default getGenreById;

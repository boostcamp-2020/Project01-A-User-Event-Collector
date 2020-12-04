import prisma from "../../prisma";
import { getTrackCard } from "../tracks";

const getGenreById = async (id: number): Promise<Object | null> => {
  const genre: any = await prisma.genres.findUnique({ where: { id } });
  if (!genre) return null;

  const trackIds: any = await prisma.tracks_Genres.findMany({
    where: { genreId: id },
  });
  const albumIds: any = await prisma.albums_Genres.findMany({
    where: { genreId: id },
  });
  const artistIds: any = await prisma.artists_Genres.findMany({
    where: { genreId: id },
  });

  // TODO: REFACTOR PROMISE.ALL, MAKE MORE FASTER
  genre.Tracks = await Promise.all(
    trackIds.map((elem: any) => getTrackCard(elem.trackId))
  );
  genre.Albums = await Promise.all(
    albumIds.map((elem: any) =>
      prisma.albums.findUnique({ where: { id: elem.albumId } })
    )
  );
  genre.Artists = await Promise.all(
    artistIds.map((elem: any) =>
      prisma.artists.findUnique({ where: { id: elem.artistId } })
    )
  );

  return genre;
};

export default getGenreById;

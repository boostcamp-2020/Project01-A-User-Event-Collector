import prisma from "../../../prisma";
import { getTrackCard } from "../tracks";

const getArtistById = async (id: number): Promise<Object | null> => {
  const artist: any = await prisma.artists.findUnique({ where: { id } });
  if (!artist) return null;
  artist.Albums = await prisma.albums.findMany({ where: { artistId: id } });

  const trackIdArr = await prisma.artists_Tracks.findMany({
    where: { artistId: id },
  });
  artist.Tracks = await Promise.all(trackIdArr.map((elem: any) => getTrackCard(elem.trackId)));

  return artist;
};

export default getArtistById;

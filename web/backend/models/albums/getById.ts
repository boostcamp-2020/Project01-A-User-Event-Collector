import prisma from "../../../prisma";
import getTrackCardData from "../tracks";

const getAlbumById = async (id: number): Promise<Object | null> => {
  const album: any = await prisma.albums.findUnique({ where: { id } });

  if (!album) return null;

  const trackIdArr: any = await prisma.playlists_Tracks.findMany({
    where: { playlistId: album.playlistId },
    orderBy: { playlistTrackNumber: "asc" },
  });
  album.Tracks = await Promise.all(trackIdArr.map((elem: any) => getTrackCardData(elem.trackId)));

  return album;
};

export default getAlbumById;

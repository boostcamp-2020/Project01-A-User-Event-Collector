import prisma from "../../../prisma";
import getTrackCardData from "../tracks";

const getPlaylistById = async (id: number): Promise<Object | null> => {
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

export default getPlaylistById;

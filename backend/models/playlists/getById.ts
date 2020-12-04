import prisma from "../../prisma";
import { getTrackCard } from "../tracks";

const getPlaylistById = async (id: number): Promise<Object | null> => {
  const playlist: any = await prisma.playlists.findUnique({
    where: { id },
    include: {
      Users: {
        select: { username: true },
      },
    },
  });
  if (!playlist) return null;

  const trackIdArr = await prisma.playlists_Tracks.findMany({
    where: { playlistId: id },
    orderBy: { playlistTrackNumber: "asc" },
  });
  playlist.Tracks = await Promise.all(
    trackIdArr.map((elem: any) => getTrackCard(elem.trackId))
  );

  return playlist;
};

export default getPlaylistById;

import prisma from "../../prisma";
import { getTrackCardData } from "./test";

const getUserLikeTracks = async (id: number): Promise<Object> => {
  const trackIdArr: any = await prisma.users_Like_Tracks.findMany({ where: { userId: id } });
  const tracks: any = await Promise.all(
    trackIdArr.map((elem: any) => getTrackCardData(elem.trackId)),
  );
  return tracks;
};

const getUserLikeAlbums = async (id: number): Promise<Object> => {
  const albumsWithRelation = await prisma.users_Like_Albums.findMany({
    where: { userId: id },
    include: { Albums: true },
  });
  const albums = albumsWithRelation.map((elem) => elem.Albums);
  return albums;
};

const getUserLikeArtists = async (id: number): Promise<Object> => {
  const aritstsWithRelation = await prisma.users_Like_Artists.findMany({
    where: { userId: id },
    include: { Artists: true },
  });
  const artists = aritstsWithRelation.map((elem) => elem.Artists);
  return artists;
};

const getUserLikePlaylists = async (id: number): Promise<Object> => {
  const playlistsWithRelation = await prisma.users_Likes_Playlists.findMany({
    where: { userId: id },
    include: { Playlists: true },
  });
  const playlists = playlistsWithRelation.map((elem) => elem.Playlists);
  return playlists;
};

export { getUserLikeTracks, getUserLikeAlbums, getUserLikePlaylists, getUserLikeArtists };

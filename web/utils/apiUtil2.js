const dotenv = require("dotenv");

process.env.NODE_ENV === "production"
  ? dotenv.config({ path: "../env/production.env" })
  : dotenv.config({ path: "../env/development.env" });

const {
  Tracks,
  Albums,
  Artists,
  Playlists,
  Playlists_Tracks,
  Magazines,
  Artists_Tracks,
} = require("../db/models");

const getTrackCardData = async (id) => {
  const trackResolve = await Tracks.findOne({ where: { id: id } });
  const result = trackResolve.toJSON();

  const relationResolve = await Artists_Tracks.findAll({
    where: { trackId: id },
  });
  const artistIdArr = relationResolve.map(
    (relation) => relation.toJSON().artistId
  );

  const artistResolve = await Promise.all(
    artistIdArr.map((artistId) => Artists.findOne({ where: { id: artistId } }))
  );
  result.Aritst = artistResolve.map((artist) => artist.toJSON());

  const albumResolve = await Albums.findOne({ where: { id: result.albumId } });
  result.Album = albumResolve.toJSON();
  return result;
};

const getAlbumPageData = async (id) => {
  const albumResolve = await Albums.findOne({ where: { id: id } });
  const result = albumResolve.toJSON();

  const trackResolve = await Tracks.findAll({ where: { albumId: id } });
  result.Track = await Promise.all(
    trackResolve.map((track) => getTrackCardData(track.toJSON().id))
  );
  // console.log(result);
  return result;
};

const getArtistPageData = async (id) => {
  const artistReslove = await Artists.findOne({ where: { id: id } });
  const result = artistReslove.toJSON();

  const albumResolve = await Albums.findAll({ where: { artistId: id } });
  result.Album = albumResolve.map((album) => album.toJSON());

  const relationResolve = await Artists_Tracks.findAll({
    where: { artistId: id },
  });
  const trackIdArr = relationResolve.map(
    (relation) => relation.toJSON().trackId
  );
  result.Track = await Promise.all(
    trackIdArr.map((trackId) => getTrackCardData(trackId))
  );

  return result;
};

getArtistPageData(1);

// const fromArtist = async (id) => {
//   const artistRaw = await Artists.findOne({ where: { id: id } });
//   const artistResult = artistRaw.toJSON();
//   return artistResult;
// };

// const fromTracks = async (id) => {
//   const trackAlbumRaw = await Tracks.findOne({
//     where: { id: id },
//     include: [{ model: Albums }],
//   });
//   const result = trackAlbumRaw.toJSON();

//   const b = await Artists_Tracks.findAll({ where: { trackId: result.id } });
//   const artistsArr = b.map((b) => b.toJSON().artistId);

//   result.Artists = await Promise.all(
//     artistsArr.map((artistId) => fromArtist(artistId))
//   );

//   return result;
// };

// const fromPlaylists = async (id) => {
//   const playlistRaw = await Playlists.findOne({
//     where: { id: id },
//     include: [
//       {
//         model: Playlists_Tracks,
//         where: { playlistId: id },
//       },
//     ],
//   });
//   const result = playlistRaw.toJSON();
//   const trackArr = result.Playlists_Tracks.map((r) => r.trackId);
//   result.Tracks = await Promise.all(
//     trackArr.map((trackId) => fromTracks(trackId))
//   );
//   console.log(result);
//   console.log(result.Tracks);
// };

// fromPlaylists(1);

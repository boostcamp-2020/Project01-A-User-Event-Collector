const dotenv = require("dotenv");

process.env.NODE_ENV === "production"
  ? dotenv.config({ path: "./env/production.env" })
  : dotenv.config({ path: "./env/development.env" });

const {
  Tracks,
  Albums,
  Artists,
  Playlists,
  Playlists_Tracks,
  Magazines,
  Artists_Tracks,
} = require("./db/models");

const fromArtist = async (id) => {
  const artistRaw = await Artists.findOne({ where: { id: id } });
  const artistResult = artistRaw.toJSON();
  return artistResult;
};

const fromTracks = async (id) => {
  const trackAlbumRaw = await Tracks.findOne({
    where: { id: id },
    include: [{ model: Albums }],
  });
  const result = trackAlbumRaw.toJSON();

  const b = await Artists_Tracks.findAll({ where: { trackId: result.id } });
  const artistsArr = b.map((b) => b.toJSON().artistId);

  result.Artists = await Promise.all(
    artistsArr.map((artistId) => fromArtist(artistId))
  );

  return result;
};

const fromPlaylists = async (id) => {
  const playlistRaw = await Playlists.findOne({
    where: { id: id },
    include: [
      {
        model: Playlists_Tracks,
        where: { playlistId: id },
      },
    ],
  });
  const result = playlistRaw.toJSON();
  const trackArr = result.Playlists_Tracks.map((r) => r.trackId);
  result.Tracks = await Promise.all(
    trackArr.map((trackId) => fromTracks(trackId))
  );
  console.log(result);
  console.log(result.Tracks);
};

fromPlaylists(1);

const dotenv = require('dotenv');

process.env.NODE_ENV === 'production' 
? dotenv.config({ path: "../env/production.env"}) 
: dotenv.config({ path: "../env/development.env"})

const { Tracks, Albums, Artists, Artists_Tracks, Playlists, Playlists_Tracks, Magazines } = require('../db/models')

const getTrackAlbumArtistsFromTrackId = async (id) => {
  const track = await Tracks.findOne({where: { id }});
  const trackJSON = await track.toJSON();
  const trackId = trackJSON.id;
  const albumId = trackJSON.albumId;

  const artistsTracks = await Artists_Tracks.findAll({ where: { trackId }, include: [Artists]});
  const artists = artistsTracks.map(artistTrack => {
      return artistTrack.Artist;
    });
  trackJSON.artists = artists;

  const album = await Albums.findOne( { where: { id: albumId } } );
  trackJSON.album = album;

  return trackJSON;
  };

const getTrackIdsFromPlaylist = async (id) => {
  const playlist = await Playlists.findOne({ where: { id: id } });
  const playlistJSON = await playlist.toJSON();
  const playlistId = playlistJSON.id;

  const playlistTracks = await Playlists_Tracks.findAll({ where: { playlistId: playlistId } });
  playlistJSON.tracks = await Promise.all(
    playlistTracks.map(el => el.toJSON())
  );

  return playlistJSON;
}

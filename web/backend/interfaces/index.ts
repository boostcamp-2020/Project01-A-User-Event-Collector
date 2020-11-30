export interface Playlist {
  id: Number;
  playlistName?: String;
  description?: String;
  cover?: String;
  author?: Number;
}
export interface Artist {
  id: Number;
  artistName?: String;
  cover?: String;
  Albums?: Album[];
  Tracks?: Track[];
}
export interface Album {
  id: Number;
  albumName?: String;
  description?: String;
  cover?: String;
  artistId?: Number;
  Artists: Artist[];
}
export interface Track {
  id: Number;
  trackName?: String;
  albumTrackNumber?: Number;
  albumId?: Number;
  Album: Album;
  Artists: Artist[];
}
export interface User {
  id: Number;
  username: String;
  password: String;
  oAuth?: String;
  Playlists?: Playlist[];
}

export interface DJStation {
  id: Number;
  stationName?: String;
  cover?: String;
  popularity?: Number;
}
export interface Genre {
  id: Number;
  genreName?: String;
  popularity?: Number;
  Tracks?: Track[];
  Artists?: Artist[];
  Albums?: Album[];
}
export interface Magazine {
  id: Number;
  magazineName?: String;
  magazineType?: String;
  description?: String;
  playlistId?: Number;
  Playlists?: Playlist[];
}
export interface News {
  id: Number;
  newsName?: String;
  type?: String;
  description?: String;
  playlistId?: Number;
  Playlists?: Playlist[];
}

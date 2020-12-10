interface Artist {
  id: number;
  artistName: string;
  cover: string;
}

interface Album {
  id: number;
  albumName: string;
  description?: string;
  cover: string;
  artistId: number;
}

interface TrackCardProps {
  trackName: string;
  cover: string;
  artists: string[];
  albumName: string;
}

interface TrackArtistProps {
  id: number;
  trackId: number;
  artistId: number;
  Artists: {
    artistName: string;
  };
}

interface TrackAlbumProps {
  cover: string;
  albumName: string;
}

interface TrackProps {
  id: number;
  trackName: string;
  albumTrackNumber: number;
  albumId: number;
  Albums: TrackAlbumProps;
  Artists_Tracks: TrackArtistProps[];
}

interface Track {
  id: number;
  trackName: string;
  albumTrackNumber: number;
  albumId: number;
  Albums: Album;
  Artists: Artist[];
}

interface Playlist {
  id: number;
  playlistName: string;
  description?: string;
  cover?: string;
  author: number;
}

interface Magazine {
  id: number;
  magazineName: string;
  magazineType: string;
  description: string;
  createdAt: number;
  playlistId: number;
}

interface News {
  id: number;
  newsName: string;
  type?: string;
  description?: string;
  playlistId?: number;
}

export type {
  Track,
  Artist,
  Album,
  Playlist,
  Magazine,
  News,
  TrackCardProps,
  TrackArtistProps,
  TrackAlbumProps,
  TrackProps,
};

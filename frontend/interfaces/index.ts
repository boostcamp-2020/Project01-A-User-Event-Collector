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

interface Users_Like_Tracks {
  id: number;
  userId: number;
  trackId: number;
}

interface Track {
  id: number;
  trackName: string;
  albumTrackNumber: number;
  albumId: number;
  Albums: Album;
  Artists: Artist[];
  Users_Like_Tracks: Users_Like_Tracks[];
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

export type { Track, Artist, Album, Playlist, Magazine, News };

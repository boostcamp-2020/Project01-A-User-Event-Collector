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

interface Track {
  id: number;
  trackName: string;
  albumTrackNumber: number;
  albumId: number;
  Albums: Album;
  Artists: Artist[];
}

export type { Track, Artist, Album };

import React, { useState, useEffect } from "react";
import {
  StyledTrackCards,
  StyledTrackCard,
  StyledCheckboxDiv,
  StyledCheckbox,
  StyledImg,
  StyledTrackName,
  StyledArtists,
  StyledAlbum,
  StyledEllipsis,
} from "./styled";
import HoverImg from "../../HoverImg";
import icons from "../../../constant/icons";

interface SearchTrackCardProps {
  trackName: string;
  cover: string;
  artists: string[];
  albumName: string;
}

const SearchTrackCard = ({ trackName, cover, artists, albumName }: SearchTrackCardProps) => {
  const [checked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked(!checked);
  };
  return (
    <StyledTrackCard>
      <StyledCheckboxDiv>
        <StyledCheckbox type="checkbox" checked={checked} onChange={handleChecked} />
      </StyledCheckboxDiv>
      <StyledImg>
        <HoverImg varient="trackCardCover" src={cover} />
      </StyledImg>
      <StyledTrackName>{trackName}</StyledTrackName>
      <StyledArtists>{artists.join(", ")}</StyledArtists>
      <StyledAlbum>{albumName}</StyledAlbum>
      <StyledEllipsis>{icons.ellipsis}</StyledEllipsis>
    </StyledTrackCard>
  );
};

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

const SearchTrackCards = ({ data }: { data: TrackProps[] }): React.ReactElement => {
  return (
    <StyledTrackCards>
      {data.map((track: TrackProps) => {
        const {
          trackName,
          Albums: { cover, albumName },
          Artists_Tracks: artistTracks,
        } = track;
        const artists: string[] = [];
        artistTracks.forEach((el) => {
          artists.push(el.Artists.artistName);
        });
        return (
          <SearchTrackCard
            trackName={trackName}
            cover={cover}
            artists={artists}
            albumName={albumName}
          />
        );
      })}
    </StyledTrackCards>
  );
};

export default SearchTrackCards;

import React, { useState, useEffect } from "react";
import { TrackProps, TrackCardProps } from "../../interfaces";
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
import HoverImg from "../HoverImg";
import icons from "../../constant/icons";

const TrackCard = ({ trackName, cover, artists, albumName }: TrackCardProps) => {
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

const TrackCards = ({ data }: { data: TrackProps[] }): React.ReactElement => {
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
          <TrackCard
            key={trackName}
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

export default TrackCards;

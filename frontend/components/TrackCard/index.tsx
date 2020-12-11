import React, { useState } from "react";
import { Track } from "../../interfaces";
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

const TrackCard = ({ track }: { track: Track }) => {
  const {
    trackName,
    Albums: { cover, albumName },
    Artists,
  } = track;
  const artists: string[] = [];
  Artists.forEach((el) => {
    artists.push(el.artistName);
  });

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

const TrackCards = ({ data }: { data: Track[] }): React.ReactElement => {
  return (
    <StyledTrackCards>
      {data.map((track: Track) => {
        return <TrackCard key={track.trackName} track={track} />;
      })}
    </StyledTrackCards>
  );
};

export default TrackCards;

import React, { FC } from "react";
import icons from "../../../constant/icons";
import Heart from "../../Heart";
import {
  StyledPlaybarTrackInfo,
  StyledPlaybarTrackCard,
  StyledTrackTitle,
  StyledTrackArtists,
  StyledEllipsis,
} from "./styled";

interface Props {
  trackId: number;
  trackName: string;
  artist: any;
}

const PlaybarTrackCard: FC<Props> = ({ trackId, trackName, artist }: Props) => {
  return (
    <StyledPlaybarTrackCard>
      <StyledPlaybarTrackInfo>
        <StyledTrackTitle>{trackName}</StyledTrackTitle>
        <StyledTrackArtists>{artist}</StyledTrackArtists>
      </StyledPlaybarTrackInfo>
      {trackId && <Heart type="Tracks" targetId={trackId} />}
      {trackId && <StyledEllipsis>{icons.ellipsis}</StyledEllipsis>}
    </StyledPlaybarTrackCard>
  );
};

export default PlaybarTrackCard;

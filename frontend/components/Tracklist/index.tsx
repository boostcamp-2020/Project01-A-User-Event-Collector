import React, { FC } from "react";
import { Track } from "../../interfaces";
import StyledTrackCards from "./styled";
import TrackCard from "./TrackCard";

interface Props {
  data: Track[];
}

const Tracklist: FC<Props> = ({ data }: Props) => {
  return (
    <StyledTrackCards>
      {data.map((track: Track) => {
        return <TrackCard key={track.trackName} track={track} numberOfCards={data.length} />;
      })}
    </StyledTrackCards>
  );
};

export default Tracklist;

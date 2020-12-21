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
      {data.map((track: Track, idx: number) => {
        return <TrackCard key={-idx} track={track} numberOfCards={data.length} />;
      })}
    </StyledTrackCards>
  );
};

export default Tracklist;

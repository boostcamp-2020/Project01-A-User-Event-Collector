import React, { FC } from "react";
import styled from "styled-components";
import TrackCard from "./TrackCard";
import { Track } from "../../interfaces";

interface Props {
  Tracks: Track[];
  childern?: React.ReactNode;
}

const StyleTrackList = styled.div`
  display: flex;
  border: 2px solid green;
  flex-direction: column;
`;

const TrackList: FC<Props> = ({ Tracks }) => {
  return (
    <StyleTrackList>
      {Tracks.map((elem: Track) => (
        <TrackCard
          key={elem.id}
          id={elem.id}
          trackName={elem.trackName}
          Albums={elem.Albums}
          Artists={elem.Artists}
        />
      ))}
    </StyleTrackList>
  );
};

export default TrackList;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Track } from "../../interfaces";
import { pushCheckedTrack, removeCheckedTrack } from "../../reduxModules/checkedTrack";
import { RootState } from "../../reduxModules";
import { preventEffect } from "../../reduxModules/allCheck";
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

const checkLength = (base: Track[], target: Track, length: number) => {
  const tmp = new Set([...base, target]);
  return tmp.size >= length;
};

const TrackCard = ({ track, listLength }: { track: Track; listLength: number }) => {
  const {
    trackName,
    Albums: { cover, albumName },
    Artists,
  } = track;
  const artists: string[] = [];
  Artists.forEach((el) => {
    artists.push(el.artistName);
  });

  const checkedTrackArr = useSelector((state: RootState) => state.checkedTrack);
  const { isAllChecked, preventBubbling } = useSelector((state: RootState) => state.AllCheckedFlag);
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isChecked) {
      if (!isAllChecked && checkLength(checkedTrackArr, track, listLength))
        dispatch(preventEffect({ isAllChecked: true }));
      if (!isAllChecked) dispatch(pushCheckedTrack(track));
    }

    if (!isChecked) {
      if (isAllChecked) dispatch(preventEffect({ isAllChecked: false }));
      dispatch(removeCheckedTrack(track));
    }
  }, [isChecked]);

  useEffect(() => {
    if (preventBubbling) return;
    setIsChecked(isAllChecked);
  }, [isAllChecked]);

  const checkHandler = () => setIsChecked(!isChecked);

  return (
    <StyledTrackCard>
      <StyledCheckboxDiv>
        <StyledCheckbox type="checkbox" checked={isChecked} onChange={checkHandler} />
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
        return <TrackCard key={track.trackName} track={track} listLength={data.length} />;
      })}
    </StyledTrackCards>
  );
};

export default TrackCards;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { Track } from "../../interfaces";
import {
  addCheckedTrack,
  deleteCheckedTrack,
  setAllChecked,
  emptyCheckedTrack,
} from "../../reduxModules/checkedTrack";
import { RootState } from "../../reduxModules";
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

const TrackCard = ({ track, numberOfCards }: { track: Track; numberOfCards: number }) => {
  const {
    trackName,
    Albums: { cover, albumName },
    Artists,
  } = track;

  const {
    allChecked,
    checkedTracks,
  }: { allChecked: boolean; checkedTracks: Set<Track> } = useSelector(
    (state: RootState) => state.checkedTracks,
  );
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const controlCheckedList = () => {
    if (!checked) {
      dispatch(addCheckedTrack(track));
    } else {
      dispatch(deleteCheckedTrack(track));
    }
  };

  const handleChecked = () => {
    setChecked(!checked);
    controlCheckedList();
  };

  useEffect(() => {
    if (allChecked) {
      setChecked(true);
      dispatch(addCheckedTrack(track));
    } else if (!allChecked && checkedTracks.size === numberOfCards) {
      setChecked(false);
      dispatch(emptyCheckedTrack());
    }
  }, [allChecked]);

  useEffect(() => {
    if (checked) {
      if (checkedTracks.size === numberOfCards) {
        dispatch(setAllChecked(true));
      }
    } else if (checkedTracks.size < numberOfCards) {
      dispatch(setAllChecked(false));
    }
  }, [checked]);

  const artists: string[] = [];
  Artists.forEach((el) => {
    artists.push(el.artistName);
  });

  return (
    <StyledTrackCard>
      <StyledCheckboxDiv>
        <StyledCheckbox type="checkbox" checked={checked} onChange={handleChecked} />
      </StyledCheckboxDiv>
      <StyledImg>
        <HoverImg varient="trackCardCover" src={cover} />
      </StyledImg>
      <StyledTrackName>{trackName}</StyledTrackName>
      <StyledArtists>
        {Artists.map((artist) => {
          return <Link href={`/artists/${artist.id}`}>{artist.artistName}</Link>;
        })}
      </StyledArtists>
      <StyledAlbum>{albumName}</StyledAlbum>
      <StyledEllipsis>{icons.ellipsis}</StyledEllipsis>
    </StyledTrackCard>
  );
};

const TrackCards = ({ data }: { data: Track[] }): React.ReactElement => {
  return (
    <StyledTrackCards>
      {data.map((track: Track) => {
        return <TrackCard key={track.trackName} track={track} numberOfCards={data.length} />;
      })}
    </StyledTrackCards>
  );
};

export default TrackCards;

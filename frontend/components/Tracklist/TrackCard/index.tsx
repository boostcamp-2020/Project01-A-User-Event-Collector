/* eslint-disable no-unused-expressions */
import React, { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { Track } from "../../../interfaces";
import {
  addCheckedTrack,
  deleteCheckedTrack,
  setAllChecked,
  emptyCheckedTrack,
} from "../../../reduxModules/checkedTrack";
import { RootState } from "../../../reduxModules";
import {
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
import Heart from "../../Button/HeartButton";

interface Props {
  track: Track;
  numberOfCards: number;
}

const TrackCard: FC<Props> = ({ track, numberOfCards }: Props) => {
  const { trackName, Albums, Artists } = track;
  const { cover, albumName, id: albumId } = Albums;

  const { allChecked, checkedTracks } = useSelector((state: RootState) => state.checkedTracks);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const handleChecked = () => setChecked(!checked);

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
    checked === true ? dispatch(addCheckedTrack(track)) : dispatch(deleteCheckedTrack(track));

    if (checked && checkedTracks.size === numberOfCards) dispatch(setAllChecked(true));
    else if (checkedTracks.size < numberOfCards) dispatch(setAllChecked(false));
  }, [checked]);

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
        {Artists.map((artist, idx) => (
          <Link key={-idx} href={`/artists/${artist.id}`}>
            <span style={{ padding: "3px" }}>{artist.artistName}</span>
          </Link>
        ))}
      </StyledArtists>
      <StyledAlbum>
        <Link href={`/albums/${albumId}`}>{albumName}</Link>
      </StyledAlbum>
      <Heart type="Tracks" targetId={track.id} />
    </StyledTrackCard>
  );
};

export default TrackCard;

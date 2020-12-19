import React, { memo, MouseEvent, useState, FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Track } from "../../interfaces";
import icons from "../../constant/icons";
import { RootState } from "../../reduxModules";
import {
  StyledPlaybar,
  StyledTrackSection,
  StyledMainControlSection,
  StyledSideControlSection,
  StyledTrackTime,
  StyledTrackVolume,
  StyledTrackVolumeSlide,
  StyledPlaylistButtonWrapper,
  StyledPlaylistButton,
  StyledMainButtons,
  StyledSideButtons,
  StyledMiddleButtons,
  StyledPlayButtons,
} from "./styled";
import PlaybarTrackCard from "./PlaybarTrackCard";

interface Props {
  handleShowPlaylist: (e: MouseEvent) => void;
  showPlaylist: boolean;
}
const emptyTrack: Track = {
  id: 0,
  albumTrackNumber: 0,
  trackName: "",
  albumId: 0,
  Albums: { cover: "", id: 0, artistId: 0, albumName: "" },
  Artists: [{ artistName: "", id: 0, cover: "" }],
  Liked: false,
};

const Playbar: FC<Props> = memo(({ handleShowPlaylist, showPlaylist }: Props) => {
  const playList: Track[] = useSelector((state: RootState) => state.playQueue);
  const [headTrack, setHeadTrack] = useState<Track>(emptyTrack);
  const [playingPointer, setPlayingPointer] = useState<number>(-1);
  const [playmode, setPlaymode] = useState<boolean>(false);

  useEffect(() => {
    if (headTrack === emptyTrack) {
      setHeadTrack(playList[0]);
      setPlayingPointer(0);
    }

    if (playList.length <= 0) {
      setHeadTrack(emptyTrack);
      setPlayingPointer(-1);
    }
  }, [playList]);

  const playBtnHandler = (e: MouseEvent) => {
    e.stopPropagation();
    setPlaymode(!playmode);
  };

  const nextBtnHandler = (e: MouseEvent) => {
    e.stopPropagation();
    if (playList[playingPointer + 1]) {
      setPlayingPointer(playingPointer + 1);
    }
  };
  const prevBtnHandler = (e: MouseEvent) => {
    e.stopPropagation();
    if (playList.length > 0 && playingPointer > 0) {
      setPlayingPointer(playingPointer - 1);
    }
  };

  const dispatch = useDispatch();
  const [volume, setVolume] = useState<number>(50);
  const fullPlayTime = "3:32";
  const currentPlayTime = "1:32";

  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();
  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setVolume(parseInt(e.currentTarget.value, 10));
  };

  return (
    <StyledPlaybar onClick={handleShowPlaylist}>
      <StyledTrackSection>
        {playList[playingPointer] && <PlaybarTrackCard track={playList[playingPointer]} />}
      </StyledTrackSection>

      <StyledMainControlSection>
        <StyledMainButtons>
          <StyledSideButtons>{icons.random}</StyledSideButtons>
          <StyledMiddleButtons onClick={prevBtnHandler}>{icons.previous}</StyledMiddleButtons>
          <StyledPlayButtons onClick={playBtnHandler}>
            {playmode ? icons.pause : icons.play}
          </StyledPlayButtons>
          <StyledMiddleButtons onClick={nextBtnHandler}>{icons.next}</StyledMiddleButtons>
          <StyledSideButtons>{icons.repeat}</StyledSideButtons>
        </StyledMainButtons>
      </StyledMainControlSection>
      <StyledSideControlSection>
        <StyledTrackTime>
          {currentPlayTime} / {fullPlayTime}
        </StyledTrackTime>
        <StyledTrackVolume>
          <StyledTrackVolumeSlide
            type="range"
            value={volume}
            onChange={handleVolume}
            onClick={stopPropagation}
          />
        </StyledTrackVolume>
        <StyledPlaylistButtonWrapper>
          <StyledPlaylistButton showPlaylist={showPlaylist}>{icons.list}</StyledPlaylistButton>
        </StyledPlaylistButtonWrapper>
      </StyledSideControlSection>
    </StyledPlaybar>
  );
});

export default Playbar;

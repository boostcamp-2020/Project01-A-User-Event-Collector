import styled from "styled-components";

const StyledPlaybar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  width: 100%;
  min-height: 6em;
  bottom: 0em;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 15;
`;

const StyledSongSection = styled.div`
  display: flex;
  width: 30%;
`;

const StyledMainControlSection = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: center;
`;

const StyledMainButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSideButtons = styled.button`
  color: #888;
  font-size: 1.6em;
  background-color: transparent;
  outline: none;
  margin: 0em 0.5em;
  border: none;
`;

const StyledMiddleButtons = styled.button`
  color: #fff;
  font-size: 1.7em;
  background-color: transparent;
  outline: none;
  border: none;
  margin: 0em 0.5em;
`;

const StyledPlayButtons = styled.button`
  color: #fe1250;
  font-size: 1.8em;
  background-color: transparent;
  outline: none;
  border: none;
  margin: 0em 0.5em;
`;

const StyledSideControlSection = styled.div`
  display: flex;
  width: 30%;
`;

const StyledTrackTime = styled.div`
  display: block;
`;

const StyledTrackVolume = styled.div`
  display: block;
`;

const StyledPlaylistButton = styled.div`
  display: block;
`;

export {
  StyledPlaybar,
  StyledSongSection,
  StyledMainControlSection,
  StyledSideControlSection,
  StyledTrackTime,
  StyledTrackVolume,
  StyledPlaylistButton,
  StyledMainButtons,
  StyledSideButtons,
  StyledMiddleButtons,
  StyledPlayButtons,
};

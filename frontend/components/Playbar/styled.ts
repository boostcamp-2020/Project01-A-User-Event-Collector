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

const StyledTrackSection = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 30%;
  box-sizing: border-box;
`;

const StyledImgSection = styled.div`
  display: block;
  margin: 0em 1.5em;
  cursor: pointer;
`;

const StyledTrackInfo = styled.div`
  display: flex;
  width: 8.5em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTrackTitle = styled.div`
  display: flex;
  color: #fff;
  width: 100%;
  margin-bottom: 0.5em;
  font-size: 1.05em;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledTrackArtists = styled.div`
  display: flex;
  width: 100%;
  color: #888;
  font-size: 0.95em;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledEmptyHeart = styled.div`
  color: #555;
  font-size: 1.5em;
  cursor: pointer;
`;

const StyledFilledHeart = styled.div`
  color: #fe1250;
  font-size: 1.5em;
  cursor: pointer;
`;

const StyledEllipsis = styled.div`
  display: flex;
  color: #555;
  font-size: 1.5em;
  margin: 0em 1em;
  cursor: pointer;
  &:hover {
    color: #aaa;
  }
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
  cursor: pointer;
`;

const StyledMiddleButtons = styled.button`
  color: #fff;
  font-size: 1.7em;
  background-color: transparent;
  outline: none;
  border: none;
  margin: 0em 0.5em;
  cursor: pointer;
`;

const StyledPlayButtons = styled.button`
  color: #fe1250;
  font-size: 1.8em;
  background-color: transparent;
  outline: none;
  border: none;
  margin: 0em 0.5em;
  cursor: pointer;
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
  StyledTrackSection,
  StyledImgSection,
  StyledTrackInfo,
  StyledTrackTitle,
  StyledTrackArtists,
  StyledEmptyHeart,
  StyledFilledHeart,
  StyledEllipsis,
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

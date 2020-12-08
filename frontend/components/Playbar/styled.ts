import styled from "styled-components";

const StyledPlaybar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  width: 100%;
  min-height: 6rem;
  bottom: 0rem;
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
  margin: 0rem 1.5rem;
  cursor: pointer;
`;

const StyledTrackInfo = styled.div`
  display: flex;
  width: 8.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTrackTitle = styled.div`
  display: flex;
  color: #fff;
  width: 100%;
  margin-bottom: 0.5rem;
  font-size: 1.05rem;
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
  font-size: 0.95rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledEmptyHeart = styled.div`
  color: #555;
  font-size: 1.5rem;
  cursor: pointer;
`;

const StyledFilledHeart = styled.div`
  color: #fe1250;
  font-size: 1.5rem;
  cursor: pointer;
`;

const StyledEllipsis = styled.div`
  display: flex;
  color: #555;
  font-size: 1.5rem;
  margin: 0rem 1rem;
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
  font-size: 1.6rem;
  background-color: transparent;
  outline: none;
  margin: 0rem 0.5rem;
  border: none;
  cursor: pointer;
`;

const StyledMiddleButtons = styled.button`
  color: #fff;
  font-size: 1.7rem;
  background-color: transparent;
  outline: none;
  border: none;
  margin: 0rem 0.5rem;
  cursor: pointer;
`;

const StyledPlayButtons = styled.button`
  color: #fe1250;
  font-size: 1.8rem;
  background-color: transparent;
  outline: none;
  border: none;
  margin: 0rem 0.5rem;
  cursor: pointer;
`;

const StyledSideControlSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
`;

const StyledTrackTime = styled.div`
  display: block;
  color: #555;
  &:color {
    color: #fff;
  }
`;

const StyledTrackVolume = styled.div`
  display: flex;
  color: #fff;
  margin: 2rem;
`;

const StyledTrackVolumeSlide = styled.input`
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track {
    background-color: #555;
    height: 0.5rem;
    &:hover {
      background-color: #555;
    }
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #ffffff;
    cursor: pointer;
    border: none;
    height: 0rem;
    width: 16px;
    margin-top: -0.3rem;
  }
`;

const StyledPlaylistButtonWrapper = styled.div`
  display: flex;
  min-width: 6rem;
  min-height: 6rem;
  justify-content: center;
  align-items: center;
  border-left: 0.1rem solid #555;
  cursor: pointer;
`;

const StyledPlaylistButton = styled.div`
  display: flex;
  font-size: 2rem;
  color: #555;
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
  StyledTrackVolumeSlide,
  StyledPlaylistButtonWrapper,
  StyledPlaylistButton,
  StyledMainButtons,
  StyledSideButtons,
  StyledMiddleButtons,
  StyledPlayButtons,
};

import styled, { keyframes } from "styled-components";

const StyledLayoutWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledLayout = styled.div`
  display: flex;
  height: 100vh;
`;

const showSearchBar = keyframes`
  0% {
    top: -5rem;
  }
  50% {
    top: -2.5rem;
  }
  100% {
    top: 0rem;
  }
`;

const StyledSearchBar = styled.div`
  display: flex;
  position: fixed;
  z-index: 10;
  top: 0rem;
  background-color: #fff;
  width: calc(100vw - 15rem);
  right: 0rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  transition: width 2s, height 4s;
  animation: ${showSearchBar} 0.1s 0s linear;
`;

const StyledContent = styled.div`
  display: block;
  position: relative;
  box-sizing: border-box;
  left: 15rem;
  width: calc(100% - 15rem);
  background-color: #fff;
  padding: 0rem 10rem;
`;

const StyledBlockingOverlay = styled.div`
  display: flex;
  position: fixed;
  top: 0rem;
  width: 100%;
  height: calc(100% - 6rem) !important;
  z-index: 60;
`;

const StyledOverlay = styled.div`
  display: flex;
  position: fixed;
  top: 0rem;
  width: 100%;
  height: calc(100% - 6rem) !important;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 61;
`;

const StyledOverlayImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 22rem);
`;

const StyledOverlayBar = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 22rem;
`;

const StyledOverlayControl = styled.div`
  display: flex;
  width: 22rem;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  justify-content: space-between;
  align-items: center;
`;

const StyledControlText = styled.div`
  display: flex;
  color: #fff;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const StyledButtons = styled.div`
  display: flex;
  width: 5rem;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.div`
  display: flex;
  font-size: 1.25rem;
  color: #888;
  & + & {
    margin: 0rem 1rem;
  }
`;

const StyledTrackLists = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 3rem);
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
`;

const StyledTrackCard = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0.75rem 1rem;
  &: hover {
    background-color: #333;
  }
`; // TODO: hover시에 많은 엘레멘트의 색이 바뀌기 떄문에 onMouseEvnet로 css 조절할 수 있도록 수정

const StyledTrackCardCover = styled.div`
  display: flex;
`;

const StyledTrackCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 1rem;
`;

const StyledTrackCardTitle = styled.div`
  display: flex;
  color: #fff;
  margin-bottom: 0.25rem;
`;

const StyledTrackCardArtists = styled.div`
  display: flex;
  color: #777;
`;

const StyledTrackDeleteButton = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.1rem;
  align-items: center;
  position: absolute;
  right: 1.5rem;
  color: #333;
`;

export {
  StyledLayoutWrapper,
  StyledLayout,
  StyledContent,
  StyledSearchBar,
  StyledBlockingOverlay,
  StyledOverlay,
  StyledOverlayImg,
  StyledOverlayBar,
  StyledOverlayControl,
  StyledControlText,
  StyledButtons,
  StyledButton,
  StyledTrackLists,
  StyledTrackCard,
  StyledTrackCardCover,
  StyledTrackCardInfo,
  StyledTrackCardTitle,
  StyledTrackCardArtists,
  StyledTrackDeleteButton,
};

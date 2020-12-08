import styled from "styled-components";

const StyledSearchTrackPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 85vh;
  margin: 1.75em;
  box-sizing: border-box;
  padding-left: 5em;
  padding-right: 10em;
  width: 100%;
`;

const StyledResult = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4em;
  margin-bottom: 2em;
  padding-bottom: 0.25em;
  border-bottom: 0.1em solid rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const StyledResultText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25em;
  font-weight: bold;
`;

const StyledResultButtons = styled.div`
  display: flex;
  min-width: 21em;
  justify-content: space-between;
  height: 3em;
`;

const StyledPlayAllButton = styled.button`
  background-color: #fe1250;
  color: #fbfbfb;
  border: none;
  height: 100%;
  width: 9em;
  border-radius: 0.5em;
  font-size: 1.1em;
  text-align: center;
`;

const StyledRandomPlayButton = styled.button`
  background-color: #fbfbfb;
  color: #000;
  border: 0.1em solid #ccc;
  height: 100%;
  width: 9em;
  border-radius: 0.5em;
  font-size: 1.1em;
  text-align: center;
`;

const StyledSearchTrackCards = styled.div`
  display: flex;
`;

const StyledIcons = styled.span`
  padding-right: 0.5em;
`;

export {
  StyledSearchTrackPage,
  StyledResult,
  StyledResultText,
  StyledResultButtons,
  StyledPlayAllButton,
  StyledRandomPlayButton,
  StyledSearchTrackCards,
  StyledIcons,
};

import styled from "styled-components";

const StyledSearchTrackPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 85vh;
  margin: 1.75rem;
  box-sizing: border-box;
  padding-left: 5rem;
  padding-right: 10rem;
  width: 100%;
`;

const StyledResult = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  margin-bottom: 2rem;
  padding-bottom: 0.25rem;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const StyledResultText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
`;

const StyledResultButtons = styled.div`
  display: flex;
  min-width: 21rem;
  justify-content: space-between;
  height: 3rem;
`;

const StyledPlayAllButton = styled.button`
  background-color: #fe1250;
  color: #fbfbfb;
  border: none;
  height: 100%;
  width: 9rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  text-align: center;
`;

const StyledRandomPlayButton = styled.button`
  background-color: #fbfbfb;
  color: #000;
  border: 0.1rem solid #ccc;
  height: 100%;
  width: 9rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  text-align: center;
`;

const StyledSearchTrackCards = styled.div`
  display: flex;
`;

const StyledIcons = styled.span`
  padding-right: 0.5rem;
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

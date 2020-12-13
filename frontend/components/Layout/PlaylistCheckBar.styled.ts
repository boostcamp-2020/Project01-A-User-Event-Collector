import styled from "styled-components";

const StyledPlaylistCheckBar = styled.div`
  display: flex;
  position: fixed;
  top: 0rem;
  right: 0rem;
  flex-direction: column;
  background-color: #f2f2f2;
  width: calc(100vw - 15rem);
  height: 8rem;
  z-index: 48;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 1rem 17rem;
`;

const StyledInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 0.1rem solid #ddd;
  box-sizing: border-box;
  padding-bottom: 1rem;
`;

const StyledInfoSectionLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInfoSectionCheckWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const StyledInfoSectionCheckedNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fe1250;
  font-weight: bold;
  margin-left: 0.5rem;
`;

const StyledInfoSectionRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
`;

const StyledButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledButtonSectionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButtonSectionButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  border: transparent;
`;

const StyledButtonSectionPlayWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButtonSectionPlayButton = styled.button`
  cursor: pointer;
  background-color: #fe1250;
  color: #fbfbfb;
  border: none;
  height: 2.5rem;
  width: 9rem;
  border-radius: 0.25rem;
  font-size: 1.1rem;
  text-align: center;
  outline: none;
`;

const StyledIcons = styled.span`
  padding-right: 0.5rem;
  font-size: 1rem;
`;

export {
  StyledPlaylistCheckBar,
  StyledInfoSection,
  StyledInfoSectionLeft,
  StyledInfoSectionCheckWrapper,
  StyledInfoSectionCheckedNumber,
  StyledInfoSectionRight,
  StyledButtonSection,
  StyledButtonSectionButtons,
  StyledButtonSectionButton,
  StyledButtonSectionPlayWrapper,
  StyledButtonSectionPlayButton,
  StyledIcons,
};

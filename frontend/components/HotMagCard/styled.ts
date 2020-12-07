import styled from "styled-components";

const StyledHotMagCard = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
  z-index: 2;
`;

const StyledDescriptionLabel = styled.div`
  display: flex;
  margin: 0.25em 0em;
`;

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 3.5em;
`;

const StyledDescriptionTitle = styled.div`
  display: flex;
  font-size: 2.75em;
  font-weight: bold;
  margin: 0.25em 0em;
`;

const StyledDescriptionContent = styled.div`
  display: flex;
  font-size: 1em;
  color: #939393;
  margin: 0.25em 0em;
`;

const StyledDescriptionInfo = styled.div`
  margin-top: 0.2em;
  display: flex;
  font-size: 1em;
  color: #939393;
  margin: 0.25em 0em;
`;

const StyledDate = styled.span`
  margin: 0.25em 0em;
  &::before {
    content: "-";
  }
`;

export {
  StyledHotMagCard,
  StyledDescription,
  StyledDescriptionLabel,
  StyledDescriptionTitle,
  StyledDescriptionContent,
  StyledDescriptionInfo,
  StyledDate,
};

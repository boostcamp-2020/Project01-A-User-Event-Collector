import styled from "styled-components";

const StyledHotMagCard = styled.div`
  display: flex;
  background-color: #fff;
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
`;

const StyledDescriptionContent = styled.div`
  display: flex;
  font-size: 1em;
  color: #939393;
`;

const StyledDescriptionInfo = styled.div`
  margin-top: 0.2em;
  display: flex;
  font-size: 1em;
  color: #939393;
`;

const StyledDate = styled.span`
  &::before {
    content: "-";
  }
`;

export {
  StyledHotMagCard,
  StyledDescription,
  StyledDescriptionTitle,
  StyledDescriptionContent,
  StyledDescriptionInfo,
  StyledDate,
};

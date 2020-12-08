import styled from "styled-components";

const StyledHotMagCard = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
  z-index: 2;
`;

const StyledDescriptionLabel = styled.div`
  display: flex;
  margin: 0.25rem 0rem;
`;

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 3.5rem;
`;

const StyledDescriptionTitle = styled.div`
  display: flex;
  font-size: 2.75rem;
  font-weight: bold;
  margin: 0.25rem 0rem;
`;

const StyledDescriptionContent = styled.div`
  display: flex;
  font-size: 1rem;
  color: #939393;
  margin: 0.25rem 0rem;
`;

const StyledDescriptionInfo = styled.div`
  margin-top: 0.2rem;
  display: flex;
  font-size: 1rem;
  color: #939393;
  margin: 0.25rem 0rem;
`;

const StyledDate = styled.span`
  margin: 0.25rem 0rem;
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

import styled from "styled-components";

const StyledHotMagCard = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
  z-index: 2;
  &: hover {
    cursor: pointer;
    text-decoration: underline;
  }
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
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  width: 600px;
  height: 32px;
  color: #939393;
  font-size: 16px;
  margin: 0.25rem 0rem;
`;

const StyledDescriptionInfo = styled.div`
  margin-top: 0.2rem;
  display: flex;
  font-size: 1rem;
  color: #939393;
  margin: 0.25rem 0rem;
`;

const StyledTrivialInfo = styled.span`
  &:hover: {
    cursor: none;
  }
`;

export {
  StyledHotMagCard,
  StyledDescription,
  StyledDescriptionLabel,
  StyledDescriptionTitle,
  StyledDescriptionContent,
  StyledDescriptionInfo,
  StyledTrivialInfo,
};

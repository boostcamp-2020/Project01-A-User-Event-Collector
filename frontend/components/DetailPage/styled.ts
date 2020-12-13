import styled from "styled-components";

const StyledDetailPage = styled.div`
  display: flex;
  margin: 3rem;
  flex-direction: column;
`;

const StyledDescriptionHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  algin-items: center;
  width: 100%;
  padding-bottom: 3rem;
  box-sizing: border-box;
  border-bottom: 0.1rem solid #ddd;
`;

const StyledTrackCard = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export { StyledDetailPage, StyledDescriptionHeader, StyledTrackCard };

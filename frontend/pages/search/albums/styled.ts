import styled from "styled-components";

const StyledSearchAlbumPage = styled.div`
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
  width: 100%;
`;

const StyledResultText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25em;
  font-weight: bold;
`;

const StyledSearchAlbumCards = styled.div`
  display: flex;
`;

export { StyledSearchAlbumPage, StyledResult, StyledResultText, StyledSearchAlbumCards };

import styled from "styled-components";

const StyledSearchAlbumPage = styled.div`
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
  width: 100%;
`;

const StyledResultText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
`;

const StyledSearchAlbumCards = styled.div`
  display: flex;
`;

export { StyledSearchAlbumPage, StyledResult, StyledResultText, StyledSearchAlbumCards };
export default StyledSearchAlbumPage;

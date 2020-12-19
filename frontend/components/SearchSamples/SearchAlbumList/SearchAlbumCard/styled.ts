import styled from "styled-components";

const StyledAlbum = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 15rem;
  & + & {
    margin: 3rem; // TODO: 더 많은 데이터가 있을 때 간격 다시 확인해보기
  }
`;

const StyledCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 12rem;
`;

const StyledAlbumName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  width: 12rem;
  box-sizing: border-box;
  font-size: 1.1rem;
  padding: 0.5rem 0rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledAlbumArtist = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  color: #aaa;
  width: 12rem;
  box-sizing: border-box;
  font-size: 1.1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export { StyledAlbum, StyledCover, StyledAlbumName, StyledAlbumArtist };

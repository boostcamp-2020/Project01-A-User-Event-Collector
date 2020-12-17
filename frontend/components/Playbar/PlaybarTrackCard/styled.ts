import styled from "styled-components";

const StyledPlaybarTrackCard = styled.div`
  //얘는 나중에 삭제할수도
  display: flex;
  align-items: center;
`;

const StyledPlaybarTrackInfo = styled.div`
  display: flex;
  width: 8.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTrackTitle = styled.div`
  display: flex;
  color: #fff;
  width: 100%;
  margin-bottom: 0.5rem;
  font-size: 1.05rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledTrackArtists = styled.div`
  display: flex;
  width: 100%;
  color: #888;
  font-size: 0.95rem;
  cursor: pointer;
`;

const StyledEllipsis = styled.div`
  display: flex;
  color: #555;
  font-size: 1.5rem;
  margin: 0rem 1rem;
  cursor: pointer;
  &:hover {
    color: #aaa;
  }
`;
const StyledImgSection = styled.div`
  display: block;
  margin: 0rem 1.5rem;
  cursor: pointer;
`;
const StyledTrackArtist = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

export {
  StyledPlaybarTrackInfo,
  StyledPlaybarTrackCard,
  StyledTrackArtists,
  StyledTrackArtist,
  StyledTrackTitle,
  StyledEllipsis,
  StyledImgSection,
};

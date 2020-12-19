import styled from "styled-components";

const StyledTrackCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.4rem 0rem;
  &:hover {
    background-color: #ededed;
  }
`;

const StyledCheckboxDiv = styled.div`
  display: flex;
  width: 3%;
  justify-content: center;
  align-items: center;
`;

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 3px solid #000;
  &:checked ~ {
    background-color: #fe1250;
  }
`; // TODO: custom input type checkbox

const StyledImg = styled.div`
  display: flex;
  width: 6%;
  justify-content: center;
  align-items: center;
`;

const StyledTrackName = styled.div`
  display: flex;
  width: 30%;
  justify-content: flex-start;
  align-items: center;
`;

const StyledArtists = styled.div`
  display: flex;
  width: 28%;
  justify-content: flex-start;
  align-items: center;
  color: #aaa;
`;

const StyledAlbum = styled.div`
  display: flex;
  width: 28%;
  justify-content: flex-start;
  align-items: center;
  color: #aaa;
`;

const StyledEllipsis = styled.div`
  display: flex;
  width: 5%;
  justify-content: center;
  align-items: center;
`;

export {
  StyledTrackCard,
  StyledCheckboxDiv,
  StyledCheckbox,
  StyledImg,
  StyledTrackName,
  StyledArtists,
  StyledAlbum,
  StyledEllipsis,
};

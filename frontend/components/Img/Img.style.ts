import styled from "styled-components";

interface styledImgProps {
  varient?: string;
}

const themes: any = {
  todayBig: `
    width: 20em;
    height: 20em;
  `,
  todaySmall: `
    width: 12em;
    height: 12em;
  `,
  todayNews: `
    width: 20em;
    height: 12em;
  `,
  descriptionCover: `
    width: 13em;
    height: 13em;
  `,
  profile: `
    width: 2em;
    height: 2em;
    border-radius: 50%;
  `,
  trackCardCover: `
    width: 2.5em;
    height: 2.5em;
  `,
  likedArtist: `
    width: 12em;
    height: 12em;
    border-radius: 50%;
  `,
  nowPlayingCover: `
    width: 3em;
    height: 3em;
  `,
  magazineBig: `
    width: 19em;
    height: 19em;
  `,
};

const StyledImg = styled.img<styledImgProps>`
  object-fit: cover;
  ${(props) => {
    return themes[props.varient || ""];
  }}
`;

export default StyledImg;

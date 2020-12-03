import styled from "styled-components";

interface styledImgProps {
  varient?: string;
}

const themes: any = {
  todayBig: `
    width: 20rem;
    height: 20rem;
  `,
  todaySmall: `
    width: 12rem;
    height: 12rem;
  `,
  todayNews: `
    width: 20rem;
    height: 12rem;
  `,
  descriptionCover: `
    width: 13rem;
    height: 13rem;
  `,
  profile: `
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  `,
  trackCardCover: `
    width: 2.5rem;
    height: 2.5rem;
  `,
  likedArtist: `
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
  `,
  nowPlayingCover: `
    width: 3rem;
    height: 3rem;
  `,
};

const StyledImg = styled.img<styledImgProps>`
  object-fit: cover;
  ${(props) => {
    return themes[props.varient || ""];
  }}
`;

export default StyledImg;

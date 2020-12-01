import styled from "styled-components";

interface styledHoverImgProps {
  varient: string;
}

const HoverImgthemes: any = {
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
  trackCardCover: `
    width: 2.5rem;
    height: 2.5rem;
  `,
};

export const StyledHoverImg = styled.img<styledHoverImgProps>`
  object-fit: cover;
  ${(props) => HoverImgthemes[props.varient]}
`;

interface styledHoverCoverProps {
  varient: string;
}

const HoverCoverthemes: any = {
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
  trackCardCover: `
    width: 2.5rem;
    height: 2.5rem;
  `,
};

export const StyledHoverCover = styled.div<styledHoverCoverProps>`
  display: none;
  ${(props) => HoverCoverthemes[props.varient]}
  &:hover {
    display: block;
  }
`;

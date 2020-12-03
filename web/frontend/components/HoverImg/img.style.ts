import styled from "styled-components";

export interface styledHoverImgProps {
  varient?: string;
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

export const StyledHoverImg = styled.div<styledHoverImgProps>`
  object-fit: cover;
  position: relative;
  ${(props) => HoverImgthemes[props.varient || ""]}
`;

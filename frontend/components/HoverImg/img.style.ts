import styled from "styled-components";

export interface styledHoverImgProps {
  varient?: string;
}

const HoverImgthemes: any = {
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
  trackCardCover: `
    width: 2.5em;
    height: 2.5em;
  `,
  magazineBig: `
    width: 19em;
    height: 19em;
  `,
};

export const StyledHoverImg = styled.div<styledHoverImgProps>`
  object-fit: cover;
  position: relative;
  ${(props) => HoverImgthemes[props.varient || ""]}
`;

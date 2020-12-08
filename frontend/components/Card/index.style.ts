import styled from "styled-components";

interface StyledCardProps {
  varient?: string;
}

const themes: any = {
  todayBig: `
    width: 20em;
  `,
  todaySmall: `
    width: 12em;
  `,
  todayNews: `
    width: 20em;
  `,
  trackCardCover: `
    width: 2.5em;
  `,
  magazineBig: `
    width: 19em;
  `,
};

export const StyledCard = styled.li<StyledCardProps>`
  display: flex;
  flex-direction: column;
  margin-left: 1em;
  margin-bottom: 2em;
  ${(props) => themes[props.varient || ""]}
  & > a {
    text-decoration: none;
  }
  & > a:hover {
    text-decoration: underline;
  }
`;
export const TitleA = styled.a`
  font-size: 1em;
  color: #222222;
  padding: 10px 0;
`;
export const SmallA = styled.a`
  font-size: 0.7em;
  color: #777777;
`;
export const SmallSpan = styled.span`
  font-size: 0.7em;
  color: #777777;
`;

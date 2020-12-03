import styled from "styled-components";

interface StyledCardProps {
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
  trackCardCover: `
    width: 2.5rem;
    height: 2.5rem;
  `,
};

export const StyledCard = styled.li<StyledCardProps>`
  display: flex;
  flex-direction: column;
  ${(props) => themes[props.varient]}
  & > a {
    text-decoration: none;
  }
  & > a:hover {
    text-decoration: underline;
  }
`;
export const TitleA = styled.a`
  font-size: 1rem;
  color: #222222;
  padding: 10px 0;
`;
export const SmallA = styled.a`
  font-size: 0.7rem;
  color: #777777;
`;
export const SmallSpan = styled.span`
  font-size: 0.7rem;
  color: #777777;
`;

import styled from "styled-components";

interface StyledCardProps {
  varient?: string;
}

const themes: any = {
  todayBig: `
    width: 20rem;
  `,
  todaySmall: `
    width: 12rem;
  `,
  todayNews: `
    width: 20rem;
  `,
  trackCardCover: `
    width: 2.5rem;
  `,
};

export const StyledCard = styled.li<StyledCardProps>`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  ${(props) => themes[props.varient || ""]}
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

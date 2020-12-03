import styled from "styled-components";
import { Theme } from ".";

const icons: any = {
  home: "🏠",
  chart: "🏆",
  dj: "📀",
  mag: "📖",
};

interface StyledProps {
  theme: string;
  icon: string;
}

const StyledLinkCard = styled.div`
  color: #fff;
  &:hover {
    color: #ff0350;
  }
  ${({ theme, icon }: StyledProps) => {
    switch (theme) {
      case Theme.Library:
        return `
          height: 1em;
          font-size: 1em;
          && {
            margin: 0em 0em 0.75em 0em;
          }
        `;
      default:
        return `
          height: 1.25em;
          font-size: 1.5em;
          && {
            margin: 0em 0em 1em 0em;
          }

          &::before {
            content: "${icons[icon]}";
            margin: 0 10px;
          }
        `;
    }
  }}
`;

export default StyledLinkCard;

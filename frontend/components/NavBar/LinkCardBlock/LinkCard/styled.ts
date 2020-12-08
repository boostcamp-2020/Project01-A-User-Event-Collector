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
  color: #ccc;
  &:hover {
    color: #fff;
  }
  ${({ theme, icon }: StyledProps) => {
    switch (theme) {
      case Theme.Library:
        return `
          height: 1rem;
          font-size: 1rem;
          && {
            margin: 0rem 0rem 0.75rem 0rem;
          }
        `;
      default:
        return `
          height: 1.25rem;
          font-size: 1.25rem;
          && {
            margin: 0rem 0rem 1rem 0rem;
          }

          &::before {
            content: "${icons[icon]}";
            margin-right: 0.5rem;
          }
        `;
    }
  }}
`;

export default StyledLinkCard;

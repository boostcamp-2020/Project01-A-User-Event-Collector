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
            margin-right: 0.75rem;
            margin-top: 1rem;
          };
        `;
      default:
        return `
          height: 1.25rem;
          font-size: 1.25rem;
          && {
            margin-right: 1rem;
            margin-top: 1rem;
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

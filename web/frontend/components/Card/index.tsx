import React from "react";
import styled from "styled-components";
import HoverImg from "../HoverImg";

export interface CardProps {
  src?: string;
  title?: string;
  smallText?: string;
  mainLink?: string;
  smallLink?: string;
  varient: string;
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  & > a {
    text-decoration: none;
  }
  & > a:hover {
    text-decoration: underline;
  }
`;
const TitleA = styled.a`
  font-size: 1rem;
  color: #222222;
  padding: 10px 0;
`;
const SmallA = styled.a`
  font-size: 0.7rem;
  color: #777777;
`;
const SmallSpan = styled.span`
  font-size: 0.7rem;
  color: #777777;
`;

// const getSmallText = (smallText?: string, smallLink?: string): JSX.Element => {
//   if (smallLink) {
//     return <SmallA href={smallLink}>{smallText}</SmallA>;
//   }
//   return <SmallSpan>{smallText}</SmallSpan>;
// };

const Card: React.FC<CardProps> = ({
  src,
  title,
  smallText,
  mainLink,
  smallLink,
  varient,
}: CardProps) => {
  return (
    <StyledCard>
      <HoverImg varient={varient} src={src} />
      <TitleA href={mainLink}>{title}</TitleA>
      {smallLink ? (
        <SmallA href={smallLink}>{smallText}</SmallA>
      ) : (
        <SmallSpan>{smallText}</SmallSpan>
      )}
    </StyledCard>
  );
};

export default Card;

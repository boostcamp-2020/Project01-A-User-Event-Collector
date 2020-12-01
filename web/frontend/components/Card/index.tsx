import React from "react";
import styled from "styled-components";

export interface CardProps {}

const StyledCard = styled.div``;

const Img: React.FC<CardProps> = ({}: CardProps) => {
  return <StyledCard />;
};

export default Img;

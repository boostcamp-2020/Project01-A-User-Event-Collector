import React from "react";
import styled from "styled-components";
import { NextArrowSvg, PreviousArrowSvg } from "../../../utils/svg";

interface SlideButtonProps {
  onClick?: () => void;
}

const NextButton = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  right: -1rem;
  top: 31%;
  background-color: #fff;
  border-radius: 50%;
  z-index: 10000;
  & svg {
    width: 20px;
    height: 20px;
    padding: 10px;
  }
`;
const PreviousButton = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  left: -1rem;
  top: 31%;
  background-color: #fff;
  border-radius: 50%;
  z-index: 10000;
  & svg {
    width: 20px;
    height: 20px;
    padding: 10px;
  }
`;

export const SliderNextButtton: React.FC<SlideButtonProps> = ({ onClick }: SlideButtonProps) => {
  return (
    <NextButton onClick={onClick}>
      <NextArrowSvg />
    </NextButton>
  );
};

export const SliderPreviousButton: React.FC<SlideButtonProps> = ({ onClick }: SlideButtonProps) => {
  return (
    <PreviousButton onClick={onClick}>
      <PreviousArrowSvg />
    </PreviousButton>
  );
};

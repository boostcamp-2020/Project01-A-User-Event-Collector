import React from "react";
import styled from "styled-components";
import { NextArrowSvg, PreviousArrowSvg } from "../../../utils/svg";

interface SlideButtonProps {
  onClick?: () => void;
  hide?: boolean;
}

const NextButton = styled.div<SlideButtonProps>`
  position: absolute;
  width: 40px;
  height: 40px;
  right: -1em;
  top: 31%;
  background-color: #fff;
  border-radius: 50%;
  z-index: 10000;
  display: ${({ hide }) => (hide ? "none" : "block")};
  & svg {
    width: 20px;
    height: 20px;
    padding: 10px;
  }
`;
const PreviousButton = styled.div<SlideButtonProps>`
  position: absolute;
  width: 40px;
  height: 40px;
  left: -1em;
  top: 31%;
  background-color: #fff;
  border-radius: 50%;
  z-index: 10000;
  display: ${({ hide }) => (hide ? "none" : "block")};
  & svg {
    width: 20px;
    height: 20px;
    padding: 10px;
  }
`;

export const SliderNextButtton: React.FC<SlideButtonProps> = ({
  onClick,
  hide,
}: SlideButtonProps) => {
  return (
    <NextButton onClick={onClick} hide={hide}>
      <NextArrowSvg />
    </NextButton>
  );
};

export const SliderPreviousButton: React.FC<SlideButtonProps> = ({
  onClick,
  hide,
}: SlideButtonProps) => {
  return (
    <PreviousButton onClick={onClick} hide={hide}>
      <PreviousArrowSvg />
    </PreviousButton>
  );
};

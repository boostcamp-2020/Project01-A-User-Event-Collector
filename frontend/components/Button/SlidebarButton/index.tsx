import React from "react";
import styled from "styled-components";
import { NextArrowSvg, PreviousArrowSvg } from "../../../utils/svg";

interface SlideButtonProps {
  onClick?: () => void;
  hide?: boolean;
}

const NextButton = styled.div<SlideButtonProps>`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  right: -1.5rem;
  top: 42%;
  background-color: #fff;
  border-radius: 50%;
  z-index: 5;
  border: 0.1rem solid #eee;
  box-shadow: 0 0 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  display: ${({ hide }) => (hide ? "none" : "block")};
  & svg {
    width: 20px;
    height: 20px;
    padding: 10px;
  }
`;
const PreviousButton = styled.div<SlideButtonProps>`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  left: -1.5rem;
  top: 42%;
  background-color: #fff;
  border-radius: 50%;
  z-index: 5;
  display: ${({ hide }) => (hide ? "none" : "block")};
  border: 0.1rem solid #eee;
  box-shadow: 0 0 0 1px 3px 0 rgba(0, 0, 0, 0.2);
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

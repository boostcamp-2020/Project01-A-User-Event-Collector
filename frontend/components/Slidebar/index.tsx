import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { NextArrowSvg } from "../../utils/svg";
import { SliderNextButtton, SliderPreviousButton } from "../Button/SlidebarButton";
import Card from "../Card";

export interface SlidebarProps {
  varient?: string;
  dataType?: string;
  title?: string;
  titleLink?: string;
  data?: any;
}

interface TranslateProps {
  currentTranslateX?: number;
}

const StyledSlidebar = styled.div<SlidebarProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  & > a > svg {
    width: 0.7rem;
    height: 0.7rem;
  }
`;

const SlideContainer = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100%;
  position: relative;
`;

const StyledTitle = styled.div`
  font-size: 1.3em;
  font-weight: bold;
  margin: 1em 0em;
`;

const SlideContent = styled.ul<TranslateProps>`
  display: flex;
  & > li:first-child {
    margin: 0;
  }
  padding-inline-start: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ currentTranslateX }) => `translateX(${currentTranslateX}px)`};
`;

const Slidebar: React.FC<SlidebarProps> = ({
  varient,
  dataType,
  title,
  titleLink,
  data,
}: SlidebarProps) => {
  const [currentTranslateX, setCurrentTranslateX] = useState(0);
  const [slidePixels, setSlidePixels] = useState(0);
  const [nextHide, setNextHide] = useState(false);
  const [previousHide, setPreviousHide] = useState(true);
  const currentSlideRef = useRef<HTMLUListElement>(null);

  const onPreviousClicked = () => {
    const newTranslateX = currentTranslateX + slidePixels;
    if (newTranslateX > 0) {
      setCurrentTranslateX(0);
      setPreviousHide(true);
      return;
    }
    setCurrentTranslateX(newTranslateX);
    setNextHide(false);
  };

  const onNextClicked = () => {
    const { current } = currentSlideRef;
    if (current !== null) {
      const cardStyles = window.getComputedStyle(current.firstElementChild?.nextSibling);
      const cardMargin = Number(cardStyles.marginLeft.slice(0, -2));
      const containerWidth = Number(window.getComputedStyle(current).width.slice(0, -2));
      const newTranslateX = currentTranslateX - slidePixels;
      if (newTranslateX < -containerWidth) {
        setCurrentTranslateX(-containerWidth + cardMargin);
        setNextHide(true);
        return;
      }
      setCurrentTranslateX(newTranslateX);
      setPreviousHide(false);
    }
  };

  const calculatePixels = () => {
    const { current } = currentSlideRef;
    if (current !== null) {
      const containerWidth = Number(window.getComputedStyle(current).width.slice(0, -2));
      const cardStyles = window.getComputedStyle(current.firstElementChild?.nextSibling);
      const cardWidth = Number(cardStyles.width.slice(0, -2));
      const cardMargin = Number(cardStyles.marginLeft.slice(0, -2));
      const viewedCards = Math.floor(containerWidth / cardWidth);
      setSlidePixels((cardWidth + cardMargin) * viewedCards);
    }
  };

  useEffect(() => {
    calculatePixels();
    window.addEventListener("resize", calculatePixels);
  }, []);

  return (
    <StyledSlidebar varient={varient}>
      <StyledTitle>
        <a href={titleLink}>
          {title}
          {titleLink ? <NextArrowSvg /> : ""}
        </a>
      </StyledTitle>
      <SlideContainer>
        <SlideContent currentTranslateX={currentTranslateX} ref={currentSlideRef}>
          {data?.map((value: any, idx: number) => (
            <Card key={`card${-idx}`} varient={varient} dataType={dataType} rawData={value} />
          ))}
        </SlideContent>
        <SliderPreviousButton onClick={onPreviousClicked} hide={previousHide} />
        <SliderNextButtton onClick={onNextClicked} hide={nextHide} />
      </SlideContainer>
    </StyledSlidebar>
  );
};

export default Slidebar;

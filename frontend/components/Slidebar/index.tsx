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

const SlideContent = styled.ul`
  display: flex;
  & > li:first-child {
    margin: 0;
  }
  padding-inline-start: 0;
`;

const Slidebar: React.FC<SlidebarProps> = ({
  varient,
  dataType,
  title,
  titleLink,
  data,
}: SlidebarProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentSlideRef = useRef<HTMLUListElement>(null);

  const onPreviousClicked = () => {
    if (currentSlide === 0) return;
    setCurrentSlide(currentSlide - 1);
  };
  const onNextClicked = () => {
    setCurrentSlide(currentSlide + 1);
  };

  useEffect(() => {
    const { current } = currentSlideRef;
    if (current !== null) {
      current.style.transition = "all 0.5s ease-in-out";
      current.style.transform = `translateX(-${currentSlide}00%)`;
    }
  }, [currentSlide]);

  return (
    <StyledSlidebar varient={varient}>
      <a href={titleLink}>
        {title}
        {currentSlide}
        {titleLink ? <NextArrowSvg /> : ""}
      </a>
      <SlideContainer>
        <SlideContent ref={currentSlideRef}>
          {data?.map((value: any, idx: number) => (
            <Card key={`card${-idx}`} varient={varient} dataType={dataType} rawData={value} />
          ))}
        </SlideContent>
        <SliderPreviousButton onClick={onPreviousClicked} />
        <SliderNextButtton onClick={onNextClicked} />
      </SlideContainer>
    </StyledSlidebar>
  );
};

export default Slidebar;
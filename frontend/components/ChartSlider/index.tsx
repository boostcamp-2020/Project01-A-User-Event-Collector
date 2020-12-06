import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { NextArrowSvg } from "../../utils/svg";
import { SliderNextButtton, SliderPreviousButton } from "../Button/SlidebarButton";
import ChartTrackCard from "./ChartTrackCard";

export interface Props {
  title?: string;
  titleLink?: string;
  data?: any;
}

const StyledSlidebar = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 70rem;
  height: 15rem;
  & > a > svg {
    width: 0.7rem;
    height: 0.7rem;
  }
`;

const SlideContainer = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  width: 100%;
  height: 100%;
`;

const SlideContent = styled.ul`
  display: grid;
  grid-template-columns: repeat(20, minmax(50%, auto));
  grid-template-rows: repeat(5, minmax(20%, auto));
  grid-auto-flow: column;
  position: relative;
  width: 100%;
  height: 100%;
  & > li {
    margin: 0;
    padding: 0 1rem;
  }
  padding-inline-start: 0;
`;

const ChartSlider: React.FC<Props> = ({ title, titleLink, data }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentSlideRef = useRef<HTMLUListElement>(null);

  const onPreviousClicked = () => {
    if (currentSlide === 0) return;
    setCurrentSlide(currentSlide - 1);
  };
  const onNextClicked = () => {
    if (currentSlide === 19) return;
    setCurrentSlide(currentSlide + 1);
  };

  useEffect(() => {
    const { current } = currentSlideRef;
    if (current !== null) {
      current.style.transition = "all 0.6s ease-in-out";
      current.style.transform = `translateX(-${currentSlide}00%)`;
    }
  }, [currentSlide]);

  return (
    <StyledSlidebar>
      <a href={titleLink}>
        {title}
        <NextArrowSvg />
      </a>
      <SlideContainer>
        <SlideContent ref={currentSlideRef}>
          {data?.map((value: any) => (
            <ChartTrackCard data={value} />
          ))}
        </SlideContent>
        <SliderPreviousButton onClick={onPreviousClicked} />
        <SliderNextButtton onClick={onNextClicked} />
      </SlideContainer>
    </StyledSlidebar>
  );
};

export default ChartSlider;

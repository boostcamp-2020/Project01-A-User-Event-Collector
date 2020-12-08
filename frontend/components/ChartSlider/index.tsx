import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
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
  & > a > svg {
    width: 0.7rem;
    height: 0.7rem;
  }
  &:nth-child(n) {
    padding-top: 1.5em;
    padding-bottom: 2.5em;
    border-bottom: 0.1em solid rgba(0, 0, 0, 0.05);
  }
`;

const StyledSlidebarTitle = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 0.2em;
`;

const SlideContainer = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 1em 0em;
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
      <StyledSlidebarTitle>
        <a href={titleLink}>{title}</a>
      </StyledSlidebarTitle>
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

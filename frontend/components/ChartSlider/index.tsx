import React, { useEffect, useRef, useState } from "react";
import {
  StyledSlidebar,
  StyledSlidebarTitle,
  SlideContainer,
  SlideContent,
  StyledIcon,
} from "./styled";
import icons from "../../constant/icons";
import { SliderNextButtton, SliderPreviousButton } from "../Button/SlidebarButton";
import ChartTrackCard from "./ChartTrackCard";

export interface Props {
  title?: string;
  titleLink?: string;
  data?: any;
}

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
        <a href={titleLink}>
          {title}
          <StyledIcon>{[icons.angleRight]}</StyledIcon>{" "}
        </a>
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

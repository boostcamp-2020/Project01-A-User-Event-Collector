import React, { FC, useEffect, useRef, useState } from "react";
import { StyledSlidebar, SlideContainer, StyledTitle, SlideContent, StyledIcon } from "./styled";
import icons from "../../constant/icons";
import { SliderNextButtton, SliderPreviousButton } from "../Button/SlidebarButton";
import Card from "../Card";
import calculatePixels from "./func/calculatePixels";
import onNextClicked from "./func/onNextClicked";
import onPreviousClicked from "./func/onPreviousClicked";

export interface SlidebarProps {
  varient: string;
  dataType: "track" | "magazine" | "playlist" | "news" | "myPlaylist" | "album";
  title?: string;
  titleLink?: string;
  data?: any;
}

export interface TranslateProps {
  currentTranslateX?: number;
}

const Slidebar: FC<SlidebarProps> = ({
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

  const prevBtnHandler = () => {
    onPreviousClicked({
      setCurrentTranslateX,
      setPreviousHide,
      setNextHide,
      currentTranslateX,
      slidePixels,
    });
  };

  const nextBtnHandler = () => {
    onNextClicked({
      currentSlideRef,
      data,
      setCurrentTranslateX,
      setPreviousHide,
      setNextHide,
      currentTranslateX,
      slidePixels,
    });
  };

  const resizeHandler = () => {
    calculatePixels({
      currentSlideRef,
      data,
      setSlidePixels,
      setCurrentTranslateX,
      setPreviousHide,
      setNextHide,
      nextHide,
      previousHide,
    });
  };

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [nextHide]);

  return (
    <StyledSlidebar>
      <StyledTitle>
        <a href={titleLink}>
          {title}
          <StyledIcon>{icons.angleRight}</StyledIcon>
        </a>
      </StyledTitle>
      <SlideContainer>
        <SlideContent currentTranslateX={currentTranslateX} ref={currentSlideRef}>
          {data?.map((value: any, idx: number) => (
            <Card key={`card${-idx}`} varient={varient} dataType={dataType} rawData={value} />
          ))}
        </SlideContent>
        <SliderPreviousButton onClick={prevBtnHandler} hide={previousHide} />
        <SliderNextButtton onClick={nextBtnHandler} hide={nextHide} />
      </SlideContainer>
    </StyledSlidebar>
  );
};

export default Slidebar;

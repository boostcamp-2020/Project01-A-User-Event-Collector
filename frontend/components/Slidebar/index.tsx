import React, { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  StyledSlidebar,
  SlideContainer,
  StyledTitle,
  SlideContent,
  StyledLink,
  StyledIcon,
} from "./styled";
import icons from "../../constant/icons";
import { SliderNextButtton, SliderPreviousButton } from "../Button/SlidebarButton";
import Card from "../Card";
import calculatePixels from "./func/calculatePixels";
import onNextClicked from "./func/onNextClicked";
import onPreviousClicked from "./func/onPreviousClicked";

type SlidebarTypes =
  | "Tracks"
  | "Albums"
  | "Playlists"
  | "Artists"
  | "Magazines"
  | "News"
  | "MyPlaylist";

export interface SlidebarProps {
  varient: string;
  dataType: SlidebarTypes;
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
        {titleLink ? (
          <Link href={titleLink}>
            <StyledLink>
              {title}
              <StyledIcon>{icons.angleRight}</StyledIcon>
            </StyledLink>
          </Link>
        ) : (
          title
        )}
      </StyledTitle>
      <SlideContainer>
        <SlideContent currentTranslateX={currentTranslateX} ref={currentSlideRef}>
          {data?.map((value: any, idx: number) => (
            <Card key={`card${-idx}`} varient={varient} dataType={dataType} rawData={value} />
          ))}
        </SlideContent>
      </SlideContainer>
      <SliderPreviousButton onClick={prevBtnHandler} hide={previousHide} />
      <SliderNextButtton onClick={nextBtnHandler} hide={nextHide} />
    </StyledSlidebar>
  );
};

export default Slidebar;

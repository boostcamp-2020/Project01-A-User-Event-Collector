import React, { useEffect, useRef, useState } from "react";
import { StyledSlidebar, SlideContainer, StyledTitle, SlideContent, StyledIcon } from "./styled";
import icons from "../../constant/icons";
import { SliderNextButtton, SliderPreviousButton } from "../Button/SlidebarButton";
import Card from "../Card";

export interface SlidebarProps {
  varient?: string;
  dataType?: string;
  title?: string;
  titleLink?: string;
  data?: any;
}

export interface TranslateProps {
  currentTranslateX?: number;
}

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
      setNextHide(false);
      return;
    }
    setCurrentTranslateX(newTranslateX);
    setNextHide(false);
  };

  const onNextClicked = () => {
    const { current } = currentSlideRef;
    if (current !== null) {
      const containerWidth = Number(window.getComputedStyle(current).width.slice(0, -2));
      const cardStyles = window.getComputedStyle(
        current.firstElementChild?.nextElementSibling || new Element(),
      );
      const cardWidth = Number(cardStyles.width.slice(0, -2));
      const cardMargin = Number(cardStyles.marginLeft.slice(0, -2));
      const maxCardWidth = (cardWidth + cardMargin) * data.length - cardMargin - containerWidth;
      const newTranslateX = currentTranslateX - slidePixels;
      if (newTranslateX < -maxCardWidth) {
        setCurrentTranslateX(-maxCardWidth);
        setNextHide(true);
        setPreviousHide(false);
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
      let cardStyles;
      if (current.firstElementChild) {
        if (current.firstElementChild?.nextElementSibling) {
          cardStyles = window.getComputedStyle(current.firstElementChild.nextElementSibling);
          const cardWidth = Number(cardStyles.width.slice(0, -2));
          const cardMargin = Number(cardStyles.marginLeft.slice(0, -2));
          const viewedCards = Math.floor(containerWidth / cardWidth);
          const maxCardWidth = (cardWidth + cardMargin) * data.length - cardMargin - containerWidth;
          setSlidePixels((cardWidth + cardMargin) * viewedCards);
          if (nextHide && !previousHide) {
            // 우측 끝에 붙어있었을 때
            setCurrentTranslateX(-maxCardWidth);
            return;
          }
          if (containerWidth >= (cardWidth + cardMargin) * data.length) {
            setPreviousHide(true);
            setNextHide(true);
          } else {
            setNextHide(false);
          }
        }
      }
    }
  };

  useEffect(() => {
    calculatePixels();
    window.addEventListener("resize", calculatePixels);
    return () => {
      window.removeEventListener("resize", calculatePixels);
    };
  }, [nextHide]);

  return (
    <StyledSlidebar varient={varient}>
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
        <SliderPreviousButton onClick={onPreviousClicked} hide={previousHide} />
        <SliderNextButtton onClick={onNextClicked} hide={nextHide} />
      </SlideContainer>
    </StyledSlidebar>
  );
};

export default Slidebar;

interface Props {
  currentSlideRef: any;
  data?: any;
  setSlidePixels: Function;
  setCurrentTranslateX: Function;
  setPreviousHide: Function;
  setNextHide: Function;
  nextHide: boolean;
  previousHide: boolean;
}

const calculatePixels = ({
  currentSlideRef,
  data,
  setSlidePixels,
  setCurrentTranslateX,
  setPreviousHide,
  setNextHide,
  nextHide,
  previousHide,
}: Props): void => {
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

export default calculatePixels;

interface Props {
  currentSlideRef: any;
  data?: any;
  setCurrentTranslateX: Function;
  setPreviousHide: Function;
  setNextHide: Function;
  currentTranslateX: number;
  slidePixels: number;
}

const onNextClicked = ({
  currentSlideRef,
  data,
  setCurrentTranslateX,
  setPreviousHide,
  setNextHide,
  currentTranslateX,
  slidePixels,
}: Props): void => {
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

export default onNextClicked;

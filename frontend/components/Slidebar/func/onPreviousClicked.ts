interface Props {
  setCurrentTranslateX: Function;
  setPreviousHide: Function;
  setNextHide: Function;
  currentTranslateX: number;
  slidePixels: number;
}

const onPreviousClicked = ({
  setCurrentTranslateX,
  setPreviousHide,
  setNextHide,
  currentTranslateX,
  slidePixels,
}: Props): void => {
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

export default onPreviousClicked;

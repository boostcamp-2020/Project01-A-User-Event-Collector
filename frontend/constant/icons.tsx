import React from "react";
import {
  faSearch,
  faTimes,
  faRandom,
  faRedoAlt,
  faStepBackward,
  faStepForward,
  faPlay,
  faHeart,
  faEllipsisH,
  faVolumeMute,
  faVolumeOff,
  faVolumeDown,
  faVolumeUp,
  faBars,
  faAngleRight,
  faPlus,
  faArrowUp,
  faArrowDown,
  faMusic,
  faHeadphonesAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const search = <FontAwesomeIcon icon={faSearch} />;
const x = <FontAwesomeIcon icon={faTimes} />;
const random = <FontAwesomeIcon icon={faRandom} />;
const repeat = <FontAwesomeIcon icon={faRedoAlt} />;
const previous = <FontAwesomeIcon icon={faStepBackward} />;
const next = <FontAwesomeIcon icon={faStepForward} />;
const play = <FontAwesomeIcon icon={faPlay} />;
const emptyHeart = <FontAwesomeIcon icon={faHeart} />;
const ellipsis = <FontAwesomeIcon icon={faEllipsisH} />;
const volumeOff = <FontAwesomeIcon icon={faVolumeMute} />;
const volumeLow = <FontAwesomeIcon icon={faVolumeOff} />;
const volumeMiddle = <FontAwesomeIcon icon={faVolumeDown} />;
const volumeMax = <FontAwesomeIcon icon={faVolumeUp} />;
const list = <FontAwesomeIcon icon={faBars} />;
const angleRight = <FontAwesomeIcon icon={faAngleRight} />;
const plus = <FontAwesomeIcon icon={faPlus} />;
const arrowUp = <FontAwesomeIcon icon={faArrowUp} />;
const arrowDown = <FontAwesomeIcon icon={faArrowDown} />;
const music = <FontAwesomeIcon icon={faMusic} />;
const headphones = <FontAwesomeIcon icon={faHeadphonesAlt} />;

const icons = {
  search,
  x,
  random,
  repeat,
  previous,
  next,
  play,
  emptyHeart,
  ellipsis,
  volumeOff,
  volumeLow,
  volumeMiddle,
  volumeMax,
  list,
  angleRight,
  plus,
  arrowUp,
  arrowDown,
  music,
  headphones,
};

export default icons;

import React from "react";
import {
  faSearch,
  faTimes,
  faRandom,
  faRedoAlt,
  faStepBackward,
  faStepForward,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const search = <FontAwesomeIcon icon={faSearch} />;
const x = <FontAwesomeIcon icon={faTimes} />;
const random = <FontAwesomeIcon icon={faRandom} />;
const repeat = <FontAwesomeIcon icon={faRedoAlt} />;
const previous = <FontAwesomeIcon icon={faStepBackward} />;
const next = <FontAwesomeIcon icon={faStepForward} />;
const play = <FontAwesomeIcon icon={faPlay} />;

const icons = {
  search,
  x,
  random,
  repeat,
  previous,
  next,
  play,
};

export default icons;

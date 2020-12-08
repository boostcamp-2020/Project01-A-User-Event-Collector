import styled from "styled-components";
import { MagLabelStyles } from "./MagLabel.interface";

const StyledMagLabel = styled.div<MagLabelStyles>`
  height: 0.5em;
  width: ${({ width }) => width}em;
  padding: 1em;
  background-color: ${({ backgroundColor, backgroundImage }) =>
    backgroundImage ? "" : backgroundColor};
  background-image: ${({ backgroundImage }) => backgroundImage};
  color: #fff;
  border-radius: 1.6em;
  font-size: 0.9em;
  line-height: 0.5em;
  text-align: center;
`;

export default StyledMagLabel;

const AllMagLabelStyles: MagLabelStyles = { width: 2, backgroundColor: "#FF0350" };

const SpecialMagLabelStyles: MagLabelStyles = {
  width: 6,
  backgroundImage: "linear-gradient(#e66465, #9198e5)",
};

const PickMagLabelStyles: MagLabelStyles = {
  width: 3.3,
  backgroundColor: "#FF0350",
};

const GenreMagLabelStyles: MagLabelStyles = {
  width: 4.8,
  backgroundColor: "#8B02ED",
};

export { AllMagLabelStyles, SpecialMagLabelStyles, PickMagLabelStyles, GenreMagLabelStyles };

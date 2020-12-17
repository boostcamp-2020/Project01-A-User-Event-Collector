import styled from "styled-components";
import { MagLabelStyles } from "./MagLabel.interface";

const StyledMagLabel = styled.div<MagLabelStyles>`
  height: 0.75rem;
  width: ${({ width }) => width}rem;
  padding: 0.5rem;
  background-color: ${({ backgroundColor, backgroundImage }) =>
    backgroundImage ? "" : backgroundColor};
  background-image: ${({ backgroundColor, backgroundImage }) =>
    backgroundColor ? "" : backgroundImage};
  color: #fff;
  border-radius: 1.6rem;
  font-size: 0.75rem;
  font-weight: bold;
  text-align: center;
`;

export default StyledMagLabel;

const AllMagLabelStyles: MagLabelStyles = { width: 2, backgroundColor: "#FF0350" };

const SpecialMagLabelStyles: MagLabelStyles = {
  width: 5,
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

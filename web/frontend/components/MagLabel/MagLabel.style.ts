import styled from "styled-components";
import { MagLabelStyles } from "./MagLabel.interface";

const StyledMagLabel = styled.div<MagLabelStyles>`
  height: 0.15rem;
  width: ${({ width }) => width}rem;
  padding: 1rem;
  margin: 0.3rem;
  background-color: ${({ backgroundColor, backgroundImage }) =>
    backgroundImage ? "" : backgroundColor};
  background-image: ${({ backgroundImage }) => backgroundImage};
  color: #fff;
  border-radius: 1.6rem;
  line-height: 0.15rem;
  font=size: 0.2rem;
  text-align: center;
`;

export default StyledMagLabel;

const AllMagLabelStyles: MagLabelStyles = { width: 2, backgroundColor: "#FF0350" };

const SpecialMagLabelStyles: MagLabelStyles = {
  width: 4,
  backgroundImage: "linear-gradient(#e66465, #9198e5)",
};

const PickMagLabelStyles: MagLabelStyles = {
  width: 2.2,
  backgroundColor: "#FF0350",
};

const GenreMagLabelStyles: MagLabelStyles = {
  width: 3.2,
  backgroundColor: "#8B02ED",
};

export { AllMagLabelStyles, SpecialMagLabelStyles, PickMagLabelStyles, GenreMagLabelStyles };

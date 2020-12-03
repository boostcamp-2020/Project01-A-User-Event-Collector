import React from "react";
import StyledMagLabel, {
  AllMagLabelStyles,
  SpecialMagLabelStyles,
  PickMagLabelStyles,
  GenreMagLabelStyles,
} from "./MagLabel.style";
import { MagLabelProps } from "./MagLabel.interface";

const MagLabel: React.FC<MagLabelProps> = ({
  backgroundColor,
  backgroundImage,
  width,
  children,
}: MagLabelProps) => {
  return (
    <StyledMagLabel
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      width={width}
    >
      {children}
    </StyledMagLabel>
  );
};

export default MagLabel;

const AllMagLabel: React.FC = () => <MagLabel {...AllMagLabelStyles}>전체</MagLabel>;
const SpecialMagLabel: React.FC = () => (
  <MagLabel {...SpecialMagLabelStyles}>SPECIAL</MagLabel>
);
const PickMagLabel: React.FC = () => (
  <MagLabel {...PickMagLabelStyles}>PICK</MagLabel>
);
const GenreMagLabel: React.FC = () => (
  <MagLabel {...GenreMagLabelStyles}>GENRE</MagLabel>
);

export { AllMagLabel, SpecialMagLabel, PickMagLabel, GenreMagLabel };

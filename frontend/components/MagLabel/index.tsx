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
  className,
}: MagLabelProps) => {
  return (
    <StyledMagLabel
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      width={width}
      className={className}
    >
      {children}
    </StyledMagLabel>
  );
};

export default MagLabel;

interface ClassNameProps {
  className: string;
}

const AllMagLabel: React.FC<ClassNameProps> = ({ className }: ClassNameProps) => (
  <MagLabel {...AllMagLabelStyles} className={className}>
    전체
  </MagLabel>
);
const SpecialMagLabel: React.FC<ClassNameProps> = ({ className }: ClassNameProps) => (
  <MagLabel {...SpecialMagLabelStyles} className={className}>
    SPECIAL
  </MagLabel>
);
const PickMagLabel: React.FC<ClassNameProps> = ({ className }: ClassNameProps) => (
  <MagLabel {...PickMagLabelStyles} className={className}>
    PICK
  </MagLabel>
);
const GenreMagLabel: React.FC<ClassNameProps> = ({ className }: ClassNameProps) => (
  <MagLabel {...GenreMagLabelStyles} className={className}>
    GENRE
  </MagLabel>
);

export { AllMagLabel, SpecialMagLabel, PickMagLabel, GenreMagLabel };

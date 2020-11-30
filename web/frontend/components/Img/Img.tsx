import React from "react";
import StyledImg from "./Img.style";

interface ImgProps {
  width: number;
  height: number;
  src: string;
}

const Img: React.FC<ImgProps> = ({ width, height, src }: ImgProps) => {
  return <StyledImg width={width} height={height} src={src} />;
};

export default Img;

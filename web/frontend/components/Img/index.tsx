import React from "react";
import StyledImg from "./Img.style";

export interface ImgProps {
  varient: string;
  src?: string;
}

const Img: React.FC<ImgProps> = ({ varient, src }: ImgProps) => {
  return <StyledImg varient={varient} src={src} />;
};

export default Img;

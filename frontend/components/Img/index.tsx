import React from "react";
import StyledImg from "./Img.style";

export interface ImgProps {
  varient?: string;
  src?: string;
  hover?: boolean;
}

const Img: React.FC<ImgProps> = ({ varient, src, hover }: ImgProps) => {
  return <StyledImg varient={varient} src={src} hover={hover} />;
};

export default Img;

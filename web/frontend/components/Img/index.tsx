import React from "react";
import StyledImg, { MagazineImgStyles, AlbumImgStyles } from "./Img.style";
import { ImgProps } from "./Img.interface";

const Img: React.FC<ImgProps> = ({ width, height, src, borderRadius }: ImgProps) => {
  return <StyledImg width={width} height={height} src={src} borderRadius={borderRadius} />;
};

export default Img;

const MagazineImg: React.FC<ImgProps> = ({ src }: ImgProps) => {
  return <StyledImg {...MagazineImgStyles} src={src} />;
};

const AlbumImg: React.FC<ImgProps> = ({ src }: ImgProps) => {
  return <StyledImg {...AlbumImgStyles} src={src} />;
};

export { MagazineImg, AlbumImg };

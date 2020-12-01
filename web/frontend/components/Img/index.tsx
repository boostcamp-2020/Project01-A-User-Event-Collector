import React from "react";
import StyledImg, { MagazineImgStyles, AlbumImgStyles, NewsImgStyles } from "./Img.style";
import { ImgProps } from "./Img.interface";

/* TSX, for using storybook */
const Img: React.FC<ImgProps> = ({ width, height, src, borderRadius }: ImgProps) => {
  return <StyledImg width={width} height={height} src={src} borderRadius={borderRadius} />;
};

export default Img;

/* TSX, for using in code line */
const MagazineImg: React.FC<ImgProps> = ({ src }: ImgProps) => {
  return <StyledImg {...MagazineImgStyles} src={src} />;
};

const AlbumImg: React.FC<ImgProps> = ({ src }: ImgProps) => {
  return <StyledImg {...AlbumImgStyles} src={src} />;
};

const NewsImg: React.FC<ImgProps> = ({ src }: ImgProps) => {
  return <StyledImg {...NewsImgStyles} src={src} />;
};

export { MagazineImg, AlbumImg, NewsImg };

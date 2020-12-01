import React from "react";
import StyledImg, {
  MagazineImgStyles,
  AlbumImgStyles,
  NewsImgStyles,
  InfoImgStyles,
  ProfileImgStyles,
  TrackCardImgStyles,
  LikedArtistImgStyles,
  PlayerCoverImgStyles,
} from "./Img.style";
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

const NewsImg: React.FC<ImgProps> = ({ src }: ImgProps) => {
  return <StyledImg {...NewsImgStyles} src={src} />;
};

const InfoImg: React.FC<ImgProps> = ({ src }: ImgProps) => {
  return <StyledImg {...InfoImgStyles} src={src} />;
};

const ProfileImg: React.FC<ImgProps> = ({ src }: ImgProps) => {
  return <StyledImg {...ProfileImgStyles} src={src} />;
};

const TrackCardImg: React.FC<ImgProps> = ({ src }: ImgProps) => {
  return <StyledImg {...TrackCardImgStyles} src={src} />;
};

const LikedArtistImg: React.FC<ImgProps> = ({ src }: ImgProps) => {
  return <StyledImg {...LikedArtistImgStyles} src={src} />;
};

const PlayerCoverImg: React.FC<ImgProps> = ({ src }: ImgProps) => {
  return <StyledImg {...PlayerCoverImgStyles} src={src} />;
};

export {
  MagazineImg,
  AlbumImg,
  NewsImg,
  InfoImg,
  ProfileImg,
  TrackCardImg,
  LikedArtistImg,
  PlayerCoverImg,
};

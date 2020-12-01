import styled from "styled-components";
import { ImgStyles } from "./Img.interface";

/* Components, for using storybook */
const StyledImg = styled.img<ImgStyles>`
  object-fit: cover;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  src: ${({ src }) => src};
`;

export default StyledImg;

/* Component options, for using in code line */
const MagazineImgStyles: ImgStyles = {
  width: "20rem",
  height: "20rem",
  borderRadius: "0",
};
const AlbumImgStyles: ImgStyles = {
  width: "12rem",
  height: "12rem",
  borderRadius: "0",
};
const NewsImgStyles: ImgStyles = {
  width: "20rem",
  height: "12rem",
  borderRadius: "0",
};
const InfoImgStyles: ImgStyles = {
  width: "13rem",
  height: "13rem",
  borderRadius: "0",
};
const ProfileImgStyles: ImgStyles = {
  width: "2rem",
  height: "2rem",
  borderRadius: "50%",
};
const TrackCardImgStyles: ImgStyles = {
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: "0",
};
const LikedArtistImgStyles: ImgStyles = {
  width: "12rem",
  height: "12rem",
  borderRadius: "50%",
};
const PlayerCoverImgStyles: ImgStyles = {
  width: "3rem",
  height: "3rem",
  borderRadius: "0",
};

export {
  MagazineImgStyles,
  AlbumImgStyles,
  NewsImgStyles,
  InfoImgStyles,
  ProfileImgStyles,
  TrackCardImgStyles,
  LikedArtistImgStyles,
  PlayerCoverImgStyles,
};

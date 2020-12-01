import styled from "styled-components";
import { ImgStyles } from "./Img.interface";

/* Components, for using storybook */
const StyledImg = styled.img<ImgStyles>`
  object-fit: cover;
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  border-radius: ${({ borderRadius }) => borderRadius}%;
  src: ${({ src }) => src};
`;

export default StyledImg;

/* Component options, for using in code line */
const MagazineImgStyles: ImgStyles = {
  width: 20,
  height: 20,
  borderRadius: 0,
};
const AlbumImgStyles: ImgStyles = {
  width: 12,
  height: 12,
  borderRadius: 0,
};
const NewsImgStyles: ImgStyles = {
  width: 20,
  height: 12,
  borderRadius: 0,
};

export { MagazineImgStyles, AlbumImgStyles, NewsImgStyles };

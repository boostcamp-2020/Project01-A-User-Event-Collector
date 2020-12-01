import styled from "styled-components";
import { ImgStyles } from "./Img.interface";

const StyledImg = styled.img<ImgStyles>`
  object-fit: cover;
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  border-radius: ${({ borderRadius }) => borderRadius}%;
  src: ${({ src }) => src};
`;

export default StyledImg;

const MagazineImgStyles: ImgStyles = {
  width: 20,
  height: 20,
  borderRadius: 0,
};
const AlbumImgStyles: ImgStyles = {
  width: 15,
  height: 15,
  borderRadius: 0,
};

export { MagazineImgStyles, AlbumImgStyles };

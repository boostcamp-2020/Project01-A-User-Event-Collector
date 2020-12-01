import React from "react";
import Img from "./Img";
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default {
  title: "Img",
  component: Img,
  decorators: [withKnobs],
};



interface ImgProps {
  width: number;
  height: number;
  src: string;
}

const imgURL =
  "https://file.namu.moe/file/d0df75a471fd10ea29da0e1c53912a4efbe2cbed5330d115bd7b0f5c086291b6242c1d40a4a663ef672b352a121d1d08";

export const img = () => {
  const width = number('width', 20);
  const height = number('height', 20);
  const src = text('src', imgURL);
  return <Img width={width} height={height} src={src} />
}

export const MagImg: React.FC<ImgProps> = () => <Img width={20} height={20} src={imgURL} />;

export const NewsImg: React.FC<ImgProps> = () => <Img width={20} height={10} src={imgURL} />;

import React from "react";
import Img from "./Img";

export default {
  title: "Img",
  component: Img,
};

interface ImgProps {
  width: number;
  height: number;
  src: string;
}

const imgURL =
  "https://file.namu.moe/file/d0df75a471fd10ea29da0e1c53912a4efbe2cbed5330d115bd7b0f5c086291b6242c1d40a4a663ef672b352a121d1d08";

export const MagImg: React.FC<ImgProps> = () => <Img width={20} height={20} src={imgURL} />;

export const NewsImg: React.FC<ImgProps> = () => <Img width={20} height={10} src={imgURL} />;

import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Img from ".";
import { ImgProps } from "./Img.interface";
import {
  AlbumImgStyles,
  InfoImgStyles,
  LikedArtistImgStyles,
  MagazineImgStyles,
  NewsImgStyles,
  PlayerCoverImgStyles,
  ProfileImgStyles,
  TrackCardImgStyles,
} from "./Img.style";

export default {
  title: "Img",
  component: Img,
};

const Template: Story<ImgProps> = (args) => <Img {...args} />;

export const TemplateImg = Template.bind({});

export const MagazineImg = Template.bind({});
MagazineImg.args = MagazineImgStyles;

export const AlbumImg = Template.bind({});
AlbumImg.args = AlbumImgStyles;

export const NewsImg = Template.bind({});
NewsImg.args = NewsImgStyles;

export const InfoImg = Template.bind({});
InfoImg.args = InfoImgStyles;

export const ProfileImg = Template.bind({});
ProfileImg.args = ProfileImgStyles;

export const TrackCardImg = Template.bind({});
TrackCardImg.args = TrackCardImgStyles;

export const LikedArtistImg = Template.bind({});
LikedArtistImg.args = LikedArtistImgStyles;

export const PlayerCoverImg = Template.bind({});
PlayerCoverImg.args = PlayerCoverImgStyles;

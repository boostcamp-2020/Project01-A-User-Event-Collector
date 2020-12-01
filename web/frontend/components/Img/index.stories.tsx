import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Img, { ImgProps } from ".";

export default {
  title: "Img",
  component: Img,
};

const Template: Story<ImgProps> = (args) => <Img {...args} />;

export const TemplateImg = Template.bind({});

export const TodayBigImg = Template.bind({});
TodayBigImg.args = { varient: "todayBig" };

export const TodaySmallImg = Template.bind({});
TodaySmallImg.args = { varient: "todaySmall" };

export const TodayNewsImg = Template.bind({});
TodayNewsImg.args = { varient: "todayNews" };

export const descriptionCoverImg = Template.bind({});
descriptionCoverImg.args = { varient: "descriptionCover" };

export const ProfileImg = Template.bind({});
ProfileImg.args = { varient: "profile" };

export const TrackCardImg = Template.bind({});
TrackCardImg.args = { varient: "trackCardCover" };

export const LikedArtistImg = Template.bind({});
LikedArtistImg.args = { varient: "likedArtist" };

export const NowPlayingImg = Template.bind({});
NowPlayingImg.args = { varient: "nowPlayingCover" };

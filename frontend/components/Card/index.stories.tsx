import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Card, { CardProps } from ".";

export default {
  title: "Card",
  component: Card,
};

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const todayMagazineCard = Template.bind({});
todayMagazineCard.args = {
  rawData: {
    cover:
      "https://music-phinf.pstatic.net/20201119_255/1605768990292DkTAH_JPEG/%B4%EB%C7%A5-%C0%CC%B9%CC%C1%F61.jpg?type=w720",
    magazineName: `차트를 달리는 래퍼
  잭 할로우, 물라토`,
    createdAt: new Date().toDateString(),
    playlistId: 1,
  },
  varient: "todayBig",
  dataType: "magazine",
};

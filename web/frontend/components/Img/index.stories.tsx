import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Img from ".";
import { ImgProps } from "./Img.interface";

export default {
  title: "Img",
  component: Img,
};

const Template: Story<ImgProps> = (args) => <Img {...args} />;

export const TemplateImg = Template.bind({});
TemplateImg.args = { src: "https://lthumb.lisimg.com/441/21055441.jpg?width=280&sharpen=true" };

import React from "react";
import Img from ".";
import { Story } from "@storybook/react/types-6-0";
import { ImgProps } from "./Img.interface";

export default {
  title: "Img",
  component: Img,
};

const Template: Story<ImgProps> = (args) => <Img {...args} />;

export const TemplateImg = Template.bind({});

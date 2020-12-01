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

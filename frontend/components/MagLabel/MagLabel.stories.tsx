import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { MagLabelProps } from "./MagLabel.interface";
import {
  AllMagLabelStyles,
  SpecialMagLabelStyles,
  PickMagLabelStyles,
  GenreMagLabelStyles,
} from "./MagLabel.style";
import MagLabel from ".";

export default {
  title: "MagLabel",
  component: MagLabel,
};

const Template: Story<MagLabelProps> = (args) => <MagLabel {...args} />;

const AllMagLabel = Template.bind({});
AllMagLabel.args = { ...AllMagLabelStyles, children: "전체" };

const SpecialMagLabel = Template.bind({});
SpecialMagLabel.args = { ...SpecialMagLabelStyles, children: "Special" };

const PickMagLabel = Template.bind({});
PickMagLabel.args = { ...PickMagLabelStyles, children: "PICK" };

const GenreMagLabel = Template.bind({});
GenreMagLabel.args = { ...GenreMagLabelStyles, children: "GENRE" };

export { AllMagLabel, SpecialMagLabel, PickMagLabel, GenreMagLabel };

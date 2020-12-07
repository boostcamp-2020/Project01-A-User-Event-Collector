import React from "react";
import { Story } from "@storybook/react/types-6-0";
import GenreCard, { Props } from ".";

export default {
  title: "GenreCard",
  component: GenreCard,
};

export const Template: Story<Props> = (args: any) => <GenreCard {...args} />;
Template.args = {
  data: {
    id: 1,
    genreName: "국내 댄스",
  },
};

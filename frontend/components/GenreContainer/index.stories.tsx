import React from "react";
import { Story } from "@storybook/react/types-6-0";
import GenreContainer, { Props } from ".";

export default {
  title: "GenreContainer",
  component: GenreContainer,
};

export const GenreContainerTemplate: Story<Props> = (args: any) => <GenreContainer {...args} />;
GenreContainerTemplate.args = {
  title: "장르 바로가기",
  data: [
    {
      id: 1,
      genreName: "국내 댄스",
    },
    {
      id: 1,
      genreName: "국내 댄스",
    },
    {
      id: 1,
      genreName: "국내 댄스",
    },
    {
      id: 1,
      genreName: "국내 댄스",
    },
    {
      id: 1,
      genreName: "국내 댄스",
    },
    {
      id: 1,
      genreName: "국내 댄스",
    },
    {
      id: 1,
      genreName: "국내 댄스",
    },
    {
      id: 1,
      genreName: "국내 댄스",
    },
    {
      id: 1,
      genreName: "국내 댄스",
    },
    {
      id: 1,
      genreName: "국내 댄스",
    },
    {
      id: 1,
      genreName: "국내 댄스",
    },
    {
      id: 1,
      genreName: "국내 댄스",
    },
    {
      id: 1,
      genreName: "국내 댄스",
    },
    {
      id: 1,
      genreName: "국내 댄스",
    },
    {
      id: 1,
      genreName: "국내 댄스",
    },
  ],
};

import React from "react";
import ChartTrackCard, { Props } from ".";

export default {
  title: "ChartTrackCard",
  component: ChartTrackCard,
};

export const ChartTrack = (args: Props) => <ChartTrackCard {...args} />;
ChartTrack.args = {
  trackName: "Dynamite",
  Albums: {
    id: 1,
    albumName: "MORE",
    description: "여왕 K/DA가 (여자)아이들의 미연과 소연",
    cover:
      "https://musicmeta-phinf.pstatic.net/album/005/055/5055232.jpg?type=r360Fll&v=20201029173916",
    artistId: 1,
  },
  Artists: [
    {
      id: 1,
      artistName: "우기",
      cover:
        "https://music-phinf.pstatic.net/20191121_58/1574322543698KbnOz_PNG/VIBE_WORKSTUDY_Lo-fi.png",
    },
    { id: 2, artistName: "아이들", cover: null },
  ],
  rank: 1,
};

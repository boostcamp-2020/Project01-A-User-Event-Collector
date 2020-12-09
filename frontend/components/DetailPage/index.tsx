import React, { FC } from "react";
import styled from "styled-components";
import DetailHeader from "./DetailHeader";
import { Track } from "../../interfaces";
import TrackList from "../Tracklist";

interface Props {
  type: "album" | "playlist" | "artist" | "magazine" | "news";
  detailData: any;
  tracks: Track[];
}

const StyleDetailPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailPage: FC<Props> = ({ type, detailData, tracks }: Props) => {
  return (
    <StyleDetailPage>
      <DetailHeader type={type} detailData={detailData} tracks={tracks} />
      <TrackList Tracks={tracks} />
    </StyleDetailPage>
  );
};

export default DetailPage;

import React, { FC } from "react";
import styled from "styled-components";
import DetailHeader from "./DetailHeader";
import { Track } from "../../interfaces";
import TrackList from "../Tracklist";

interface Props {
  detailType: "album" | "playlist" | "artist" | "magazine" | "news";
  detailData: any;
  tracks: Track[];
}

const StyleDetailPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailPage: FC<Props> = ({ detailType, detailData, tracks }) => {
  return (
    <StyleDetailPage>
      <DetailHeader detailType={detailType} detailData={detailData} />
      <TrackList Tracks={tracks} />
    </StyleDetailPage>
  );
};

export default DetailPage;

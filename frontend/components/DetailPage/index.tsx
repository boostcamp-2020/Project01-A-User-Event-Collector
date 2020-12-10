import React, { FC } from "react";
import styled from "styled-components";
import DetailHeader from "./DetailHeader";
import { TrackProps } from "../../interfaces";
import TrackCard from "../TrackCard";

interface Props {
  type: "album" | "playlist" | "artist" | "magazine" | "news";
  detailData: any;
  tracks: TrackProps[];
}

const StyleDetailPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailPage: FC<Props> = ({ type, detailData, tracks }: Props) => {
  return (
    <StyleDetailPage>
      <DetailHeader type={type} detailData={detailData} tracks={tracks} />
      <TrackCard data={tracks} />
    </StyleDetailPage>
  );
};

export default DetailPage;

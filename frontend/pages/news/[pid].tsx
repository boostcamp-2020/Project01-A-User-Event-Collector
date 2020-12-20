import React, { FC } from "react";
import styled from "styled-components";
import DetailPage from "../../components/DetailPage";
import { News } from "../../interfaces";

const NewsPage: FC<News[]> = ({ NewsData }: any) => {
  return <DetailPage type="News" detailData={NewsData} tracks={NewsData.Tracks} />;
};

export default NewsPage;

export async function getServerSideProps({ params }: any): Promise<any> {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  const res = await fetch(`${apiUrl}:${apiPort}/api/news/${params.pid}`);
  const { NewsData } = await res.json();

  return { props: { NewsData } };
}

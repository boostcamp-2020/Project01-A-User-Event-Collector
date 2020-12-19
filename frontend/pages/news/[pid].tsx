import React, { FC } from "react";
import styled from "styled-components";
import DetailPage from "../../components/DetailPage";
import { News } from "../../interfaces";

const StyleNewsPage = styled.div`
  height: 100vh;
`;

const NewsPage: FC<News[]> = ({ NewsData }: any) => {
  return (
    <StyleNewsPage>
      <DetailPage type="news" detailData={NewsData} tracks={NewsData.Tracks} />
    </StyleNewsPage>
  );
};

export default NewsPage;

export async function getServerSideProps({ params }: any): Promise<any> {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  const res = await fetch(`${apiUrl}:${apiPort}/api/news/${params.pid}`);
  const { NewsData } = await res.json();

  return { props: { NewsData } };
}

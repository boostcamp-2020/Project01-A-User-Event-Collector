import React, { FC } from "react";
import { GetServerSideProps } from "next";
import styled from "styled-components";
import findTokenFromCookie from "../../utils/findTokenFromCookie";
import DetailPage from "../../components/DetailPage";
import myAxios from "../../utils/myAxios";
import { _News } from "../../interfaces";

const StyleNewsPage = styled.div`
  height: 100vh;
`;

const NewsPage: FC<_News[]> = ({ News }: any) => {
  return (
    <StyleNewsPage>
      <DetailPage type="news" detailData={News} tracks={News.Tracks} />
    </StyleNewsPage>
  );
};

export default NewsPage;

export async function getServerSideProps({ params }: any): Promise<any> {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;
  // const Cookie = req.headers.cookie;
  // const jwt = findTokenFromCookie(Cookie);

  const res = await fetch(`${apiUrl}:${apiPort}/api/news/${params.pid}`);
  const { News } = await res.json();

  return { props: { News } };
}

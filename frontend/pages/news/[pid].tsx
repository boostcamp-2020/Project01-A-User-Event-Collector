import React from "react";
import { GetServerSideProps } from "next";
import styled from "styled-components";
import findTokenFromCookie from "../../utils/findTokenFromCookie";
import DetailPage from "../../components/DetailPage";
import myAxios from "../../utils/myAxios";

const StyleNewsPage = styled.div`
  height: 100vh;
`;

const NewsPage = ({ News }: any) => {
  return (
    <StyleNewsPage>
      <DetailPage type="news" detailData={News} tracks={News.Tracks} />
    </StyleNewsPage>
  );
};

export default NewsPage;

export async function getServerSideProps(context: GetServerSideProps): Promise<any> {
  const { params, req }: any = context;
  // const Cookie = req.headers.cookie;
  // const jwt = findTokenFromCookie(Cookie);

  const res = await myAxios.get(`/news/${params.pid}`); // jwt
  const {
    data: { News },
  }: any = res;
  return { props: { News } };
}

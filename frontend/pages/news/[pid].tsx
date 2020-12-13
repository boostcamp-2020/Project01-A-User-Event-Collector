import React from "react";
import styled from "styled-components";
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

// export async function getStaticPaths() {
//   const {
//     data: { News },
//   }: any = await myAxios.get(`/news`);
//   const paths = News.map((news: any) => `/news/${news.id}`);

//   return { paths, fallback: false };
// }

export async function getServerSideProps({ params }: any) {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  const res = await fetch(`${apiUrl}:${apiPort}/api/news/${params.pid}`);
  const { News } = await res.json();

  return { props: { News } };
}

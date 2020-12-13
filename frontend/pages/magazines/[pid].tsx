import styled from "styled-components";
import { GetServerSideProps } from "next";
import React from "react";
import findTokenFromCookie from "../../utils/findTokenFromCookie";
import DetailPage from "../../components/DetailPage";
import { Collector } from "../../event";
import EventObjectExample from "../../event/Exampe_eventObject";
import myAxios from "../../utils/myAxios";

const StyleMagazinePage = styled.div`
  height: 100vh;
`;

const MagazinePage = ({ Magazines }: any): React.ReactElement => {
  return (
    <Collector eventConfig={EventObjectExample} dispatch={console.log}>
      <StyleMagazinePage>
        <DetailPage type="magazine" detailData={Magazines} tracks={Magazines.Tracks} />
      </StyleMagazinePage>
    </Collector>
  );
};

export default MagazinePage;

// export async function getStaticPaths() {
//   const {
//     data: { Magazines },
//   }: any = await myAxios.get(`/magazines`);
//   const paths = Magazines.map((magazine: any) => `/magazines/${magazine.id}`);

//   return { paths, fallback: false };
// }

export async function getServerSideProps(context: GetServerSideProps) {
  const { params, req } = context;
  const Cookie = req.headers.cookie;
  const jwt = findTokenFromCookie(Cookie);

  const res = await myAxios.get(`/magazines/${params.pid}`, jwt);
  const {
    data: { Magazines },
  }: any = res;
  return { props: { Magazines } };
}

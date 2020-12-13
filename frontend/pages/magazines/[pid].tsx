import styled from "styled-components";
import { GetServerSideProps } from "next";
import React, { FC } from "react";
import findTokenFromCookie from "../../utils/findTokenFromCookie";
import DetailPage from "../../components/DetailPage";
import { Collector } from "../../event";
import EventObjectExample from "../../event/Exampe_eventObject";
import myAxios from "../../utils/myAxios";
import { Magazine } from "../../interfaces";

const StyleMagazinePage = styled.div`
  height: 100vh;
`;

const MagazinePage: FC<Magazine[]> = ({ Magazines }: any) => {
  return (
    // eslint-disable-next-line no-console
    <Collector eventConfig={EventObjectExample} dispatch={console.log}>
      <StyleMagazinePage>
        <DetailPage type="magazine" detailData={Magazines} tracks={Magazines.Tracks} />
      </StyleMagazinePage>
    </Collector>
  );
};

export default MagazinePage;

export async function getServerSideProps(context: GetServerSideProps): Promise<any> {
  const { params, req }: any = context;
  // const Cookie = req.headers.cookie;
  // const jwt = findTokenFromCookie(Cookie);

  const res = await myAxios.get(`/magazines/${params.pid}`); // jwt
  const {
    data: { Magazines },
  }: any = res;
  return { props: { Magazines } };
}

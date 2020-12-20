import styled from "styled-components";
import React, { FC } from "react";
import DetailPage from "../../components/DetailPage";
import EventObjectExample from "../../event/Exampe_eventObject";
import { Magazine } from "../../interfaces";

const StyleMagazinePage = styled.div`
  height: 100vh;
`;

const MagazinePage: FC<Magazine[]> = ({ Magazines }: any) => {
  return (
    // eslint-disable-next-line no-console
    <StyleMagazinePage>
      <DetailPage type="magazine" detailData={Magazines} tracks={Magazines.Tracks} />
    </StyleMagazinePage>
  );
};

export default MagazinePage;

export async function getServerSideProps({ params }: any): Promise<any> {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  const res = await fetch(`${apiUrl}:${apiPort}/api/magazines/${params.pid}`);
  const { Magazines } = await res.json();

  return { props: { Magazines } };
}

import React, { FC } from "react";
import DetailPage from "../../components/DetailPage";
import { Magazine } from "../../interfaces";

const MagazinePage: FC<Magazine[]> = ({ Magazines }: any) => {
  return <DetailPage type="Magazines" detailData={Magazines} tracks={Magazines.Tracks} />;
};

export default MagazinePage;

export async function getServerSideProps({ params }: any): Promise<any> {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  const res = await fetch(`${apiUrl}:${apiPort}/api/magazines/${params.pid}`);
  const { Magazines } = await res.json();

  return { props: { Magazines } };
}

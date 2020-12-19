import React, { FC } from "react";
import { StyledDetailPage, StyledDescriptionHeader, StyledTrackCard } from "./styled";
import DescriptionHeader from "../DescriptionHeader";
import { Track } from "../../interfaces";
import Tracklist from "../Tracklist";

interface Props {
  type: "Albums" | "Playlists" | "Artists" | "Magazines" | "News";
  detailData: any;
  tracks: Track[];
}

const makeProps = (detailType: string, detailData: any) => {
  const result: any = {};
  result.id = detailData.id;
  result.description = detailData.description;
  result.cover = detailData.cover;

  switch (detailType) {
    case "Albums":
      result.title = detailData.albumName;
      result.owner = detailData.Artists.artistName;
      break;

    case "Playlists":
      result.title = detailData.playlistName;
      result.owner = detailData.Users.username;
      break;

    case "Magazines":
      result.title = detailData.magazineName;
      result.magazineType = detailData.magazineType;
      result.playlistId = detailData.playlistId;
      break;

    case "News":
      result.title = detailData.newsName;
      result.playlistId = detailData.playlistId;
      break;

    case "Artists":
      result.title = detailData.artistName;
      break;

    default:
  }
  return result;
};

const DetailPage: FC<Props> = ({ type, detailData, tracks }: Props) => {
  const props = makeProps(type, detailData);
  const { id, cover, title, owner, magazineType, description, playlistId } = props;

  return (
    <StyledDetailPage>
      <StyledDescriptionHeader>
        <DescriptionHeader
          type={type}
          id={id}
          playlistId={playlistId}
          title={title}
          cover={cover}
          artists={owner || magazineType}
          description={description}
        />
      </StyledDescriptionHeader>
      <StyledTrackCard>
        <Tracklist data={tracks} />
      </StyledTrackCard>
    </StyledDetailPage>
  );
};

export default DetailPage;

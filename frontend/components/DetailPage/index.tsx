import React, { FC } from "react";
import { StyledDetailPage, StyledDescriptionHeader, StyledTrackCard } from "./styled";
import DescriptionHeader from "../DescriptionHeader";
import { Track } from "../../interfaces";
import Tracklist from "../Tracklist";

interface Props {
  type: "album" | "playlist" | "artist" | "magazine" | "news";
  detailData: any;
  tracks: Track[];
}

const makeProps = (detailType: string, detailData: any) => {
  const result: any = {};
  result.id = detailData.id;
  result.description = detailData.description;
  result.cover = detailData.cover;

  switch (detailType) {
    case "album":
      result.title = detailData.albumName;
      result.owner = detailData.Artists.artistName;
      break;

    case "playlist":
      result.title = detailData.playlistName;
      result.owner = detailData.Users.username;
      break;

    case "magazine":
      result.title = detailData.magazineName;
      result.magazineType = detailData.magazineType;
      break;

    case "news":
      result.title = detailData.newsName;
      break;

    case "artist":
      result.title = detailData.artistName;
      break;

    default:
  }
  return result;
};

const DetailPage: FC<Props> = ({ type, detailData, tracks }: Props) => {
  const props = makeProps(type, detailData);
  const { id, cover, title, owner, magazineType, description } = props;

  return (
    <StyledDetailPage>
      <StyledDescriptionHeader>
        <DescriptionHeader
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

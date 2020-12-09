import React from "react";
import Link from "next/link";
import {
  StyledSamples,
  StyledSectionTitle,
  StyledSampleWrapper,
  StyledSample,
  StyledCover,
  StyledInfo,
  StyledName,
  StyledArtist,
  StyledIcon,
} from "./styled";
import Img from "../../Img";
import icons from "../../../constant/icons";

interface SampleProps {
  name: string;
  artists: string | [];
  cover: string;
}

const Sample = ({ name, artists, cover }: SampleProps): React.ReactElement => {
  return (
    <StyledSample>
      <StyledCover>
        <Img varient="nowPlayingCover" src={cover} />
      </StyledCover>
      <StyledInfo>
        <StyledName>{name}</StyledName>
        <StyledArtist>{typeof artists === "string" ? artists : artists.join(", ")}</StyledArtist>
      </StyledInfo>
    </StyledSample>
  );
};

interface SamplesProps {
  sectionTitle: string;
  data: SampleProps[];
  filter: string;
}

const Samples = ({ sectionTitle, data, filter }: SamplesProps): React.ReactElement => {
  const page = sectionTitle === "노래" ? "tracks" : sectionTitle === "앨범" ? "albums" : "artists";
  return (
    <StyledSamples>
      <Link href={`/search/${page}?filter=${filter}`}>
        <StyledSectionTitle>
          {sectionTitle}
          <StyledIcon>{icons.angleRight}</StyledIcon>
        </StyledSectionTitle>
      </Link>
      <StyledSampleWrapper>
        {data.map((el: any) => {
          const name =
            sectionTitle === "노래"
              ? el.trackName
              : sectionTitle === "앨범"
              ? el.albumName
              : el.artistName;

          const artists =
            sectionTitle === "노래"
              ? []
              : sectionTitle === "앨범"
              ? el.Artists.artistName
              : "아티스트";

          if (sectionTitle === "노래") {
            el.Artists_Tracks.forEach((elem: any) => artists.push(elem.Artists.artistName));
          }
          return (
            <Sample
              name={name}
              artists={artists}
              cover={sectionTitle === "노래" ? el.Albums.cover : el.cover}
            />
          );
        })}
      </StyledSampleWrapper>
    </StyledSamples>
  );
};

export default Samples;

// TODO: 인터페이스 정리
// interface AlbumProps {
//   id: number;
//   albumName: string;
//   description: string;
//   cover: string;
//   artistId: number;
//   Artist: {
//     artistName: string;
//   };
// }

// interface TrackProps {
//   id: number;
//   trackName: string;
//   albumTrackNumber: number;
//   albumId: number;
//   Albums: {
//     cover: string;
//     albumName: string;
//   };
//   Artists_Tracks: {
//     id: number;
//     trackId: number;
//     artistId: number;
//     Artists: {
//       artistName: string;
//     };
//   }[];
// }

// interface ArtistProps {
//   id: number;
//   artistName: string;
//   cover: string;
//   description: string;
// }

// interface SampleProps {
//   sectionTitle: string;
//   data: AlbumProps[] | ArtistProps[] | TrackProps[];
//   filter: string;
// }

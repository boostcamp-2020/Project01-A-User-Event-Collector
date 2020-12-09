import React, { useState, useEffect } from "react";
import {
  StyledOverlay,
  StyledOverlayImg,
  StyledOverlayBar,
  StyledOverlayControl,
  StyledControlText,
  StyledButtons,
  StyledButton,
  StyledTrackLists,
  StyledTrackCard,
  StyledTrackCardCover,
  StyledTrackCardInfo,
  StyledTrackCardTitle,
  StyledTrackCardArtists,
  StyledTrackDeleteButton,
} from "./styled";
import icons from "../../constant/icons";
import Img from "../Img";

interface TrackProps {
  id: number;
  trackName: string;
  albumTrackNumber: number;
  albumId: number;
  Albums: {
    cover: string;
    albumName: string;
  };
  Artists_Tracks: {
    id: number;
    trackId: number;
    artistId: number;
    Artists: {
      artistName: string;
    };
  }[];
}

const mockdata = [
  {
    id: 1,
    trackName: "우기와 친구들",
    albumTrackNumber: 1,
    albumId: 1,
    Albums: {
      cover:
        "https://musicmeta-phinf.pstatic.net/album/005/055/5055232.jpg?type=r360Fll&v=20201029173916",
      albumName: "MORE",
    },
    Artists_Tracks: [
      {
        id: 1,
        trackId: 1,
        artistId: 1,
        Artists: {
          artistName: "우기",
        },
      },
      {
        id: 21,
        trackId: 1,
        artistId: 2,
        Artists: {
          artistName: "아이들",
        },
      },
    ],
  },
  {
    id: 2,
    trackName: "우기몬",
    albumTrackNumber: 2,
    albumId: 1,
    Albums: {
      cover:
        "https://musicmeta-phinf.pstatic.net/album/005/055/5055232.jpg?type=r360Fll&v=20201029173916",
      albumName: "MORE",
    },
    Artists_Tracks: [
      {
        id: 2,
        trackId: 2,
        artistId: 1,
        Artists: {
          artistName: "우기",
        },
      },
    ],
  },
  {
    id: 5,
    trackName: "우기, 그 운명적인 만남에 대하여",
    albumTrackNumber: 5,
    albumId: 1,
    Albums: {
      cover:
        "https://musicmeta-phinf.pstatic.net/album/005/055/5055232.jpg?type=r360Fll&v=20201029173916",
      albumName: "MORE",
    },
    Artists_Tracks: [
      {
        id: 5,
        trackId: 5,
        artistId: 1,
        Artists: {
          artistName: "우기",
        },
      },
    ],
  },
];

const firstMockData = {
  id: 10,
  trackName: "위대한 우기쇼",
  albumTrackNumber: 4,
  albumId: 2,
  Albums: {
    cover:
      "https://musicmeta-phinf.pstatic.net/album/004/855/4855609.jpg?type=r360Fll&v=20200902102707",
    albumName: "THE BADDEST\n",
  },
  Artists_Tracks: [
    {
      id: 10,
      trackId: 10,
      artistId: 1,
      Artists: {
        artistName: "우기",
      },
    },
  ],
};

const TrackCard = ({ track }: { track: TrackProps }): React.ReactElement => {
  const {
    id,
    trackName,
    Artists_Tracks,
    Albums: { cover, albumName },
  } = track;
  const artists: string[] = [];
  Artists_Tracks.forEach((el) => artists.push(el.Artists.artistName));
  return (
    <StyledTrackCard>
      <StyledTrackCardCover>
        <Img varient="trackCardCover" src={cover} />
      </StyledTrackCardCover>
      <StyledTrackCardInfo>
        <StyledTrackCardTitle>{trackName}</StyledTrackCardTitle>
        <StyledTrackCardArtists>{artists.join(", ")}</StyledTrackCardArtists>
      </StyledTrackCardInfo>
      <StyledTrackDeleteButton>{icons.x}</StyledTrackDeleteButton>
    </StyledTrackCard>
  );
};

const Overlay = (): React.ReactElement => {
  const [playList, setPlayList] = useState([firstMockData]);
  const {
    Albums: { cover },
  } = playList[0];

  useEffect(() => {
    setPlayList(mockdata);
  }, []);
  return (
    <StyledOverlay>
      <StyledOverlayImg>
        <img src={cover} alt="alt" />
      </StyledOverlayImg>
      <StyledOverlayBar>
        <StyledOverlayControl>
          <>
            <StyledControlText>이어지는 노래</StyledControlText>
          </>
          <StyledButtons>
            <StyledButton>{icons.random}</StyledButton>
            <StyledButton>{icons.repeat}</StyledButton>
          </StyledButtons>
        </StyledOverlayControl>
        <StyledTrackLists>
          {playList.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </StyledTrackLists>
      </StyledOverlayBar>
    </StyledOverlay>
  );
};

export default Overlay;

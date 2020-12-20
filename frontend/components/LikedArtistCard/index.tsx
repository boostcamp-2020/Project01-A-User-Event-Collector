import React from "react";
import styled from "styled-components";
import { Artist } from "../../interfaces";
import Img from "../Img";
import Heart from "../Button/HeartButton";

interface LikedArtistProps {
  varient: string;
  artist: Artist;
}

const StyledLikedArtist = styled.div`
  position: relative;
  & > img {
    margin-bottom: 1rem;
  }
  & > button {
    color: #fe1250;
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    left: auto;
  }
  & svg {
    width: 1rem;
    height: 1rem;
  }
`;

const StyledArtistName = styled.div`
  text-align: center;
  width: 100%;
`;
const StyledHeartWrapper = styled.div`
  position: absolute;
  bottom: 15%;
  left: 3%;
`;

const LikedArtistCard: React.FC<LikedArtistProps> = ({ varient, artist }: LikedArtistProps) => {
  return (
    <StyledLikedArtist>
      <Img varient={varient} src={artist.cover} />
      <StyledHeartWrapper>
        <Heart type="Artists" targetId={artist.id} />
      </StyledHeartWrapper>
      <StyledArtistName>{artist.artistName}</StyledArtistName>
    </StyledLikedArtist>
  );
};

export default LikedArtistCard;

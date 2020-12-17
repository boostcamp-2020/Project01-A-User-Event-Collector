import Link from "next/link";
import React, { FC } from "react";
import icons from "../../../constant/icons";
import { Artist, Track } from "../../../interfaces";
import Heart from "../../Button/HeartButton";
import Img from "../../Img";
import {
  StyledPlaybarTrackInfo,
  StyledPlaybarTrackCard,
  StyledTrackTitle,
  StyledTrackArtists,
  StyledEllipsis,
  StyledImgSection,
  StyledTrackArtist,
} from "./styled";

interface Props {
  track: Track;
}

const artists = (playingArtist: Artist[]) =>
  playingArtist.map((el, idx) => {
    if (idx === playingArtist.length - 1) {
      return (
        <Link href={`/artists/${el.id}`}>
          <StyledTrackArtist>{el.artistName}</StyledTrackArtist>
        </Link>
      );
    }
    return (
      <Link href={`/artists/${el.id}`}>
        <StyledTrackArtist>{el.artistName}</StyledTrackArtist>
        <span>, </span>
      </Link>
    );
  });

const PlaybarTrackCard: FC<Props> = ({ track }: Props) => {
  return (
    <StyledPlaybarTrackCard>
      <Link href={`/albums/${track.Albums.id}`}>
        <StyledImgSection>
          {track.Albums.cover ? (
            <Img varient="nowPlayingCover" src={track.Albums.cover} />
          ) : (
            <Img
              varient="nowPlayingCover"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIWFRUVFRUVFRUVFRUVFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDisZFhktLSsrKystKysrKysrLSsrKy0tKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALEBHAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAJRABAQEAAAUEAgMBAAAAAAAAAAERAiFRYYEScZHwMUGh4fHB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOK0Se2LIBqpFgAfKbgLAANAAME0FNTF9IEolhmAuJhLTQCcXhNzp8lv2gbv4Xb+2bJ++Rn7/wCgu/dNT4TekoLb28LLGfVy/vmk4vANZfb70PbzjN4ep7A145M7epfvM9XwB6Z18ls6JvwWgvpWSd/dmdk0G/V2/wBOLindPV28G6C9Wk1dAIRPnwDV4icSG/IL/JzZn2meQW3qb3N7ciARdiXiScILeJObW4esEtpOOr6yZQPyzhZi+oElTl1+YVL9/oDbC9/4OyAvt/q8/wAZ/TKA1nfn3QtQBqfKb2SAqKYCGlXQQ0AWVKANrnRIgKuoAudfys+UoCms0gKTkJQWRbxISgeleQmAsk6VMMTQal6slT9guTyhSAgAFNQAAAABcTAAVAAAAXU0GxFADAAEBaQSA1UKABF0DyVAAABmtJQKkWpwgYigCCggEAwAAABUAANAXEWUGkFBA0ADSgsqU1aCpwnCWYAEABcMBEXABmLVwGeKqmLQQABFxAApgBhpQNBAWQ0qAvgSLoAiwGgUEAAqoYC0QgKSABFEsAwNXQZ0ka1nQXGbVANRQEqRQEwVAXUCAUUoMqqWAUhgCKYAi4iwGgAAAAAKtQgKEAMNNADDADBADQAAANRUAAACQAwSRQMDABFUGYKAiyBoNJQBUFBAAFQBQAAAAABAFQAAAAAAoAlUAKACKAYAAiwAMAFRcAQAAFBAUAAAwAAKCaKmgIoAGKAigILQAoAIpQEVAAAAABTQEUBCrUAIAGKABAAAAAATFQAFAlIiwDAgAAAYtQACAIoCKAIKAGBgAoCAAFAAwACCgIoCCoAABQAAAVFIAGAAAFiABAXAQIoJigAABEUAABBQBFAIUAAAAAQAFIABABFAFiABUigAAIRQEqwACABAAf/Z"
            />
          )}
        </StyledImgSection>
      </Link>
      <StyledPlaybarTrackInfo>
        <StyledTrackTitle>{track.trackName}</StyledTrackTitle>
        <StyledTrackArtists>{artists(track.Artists)}</StyledTrackArtists>
      </StyledPlaybarTrackInfo>
      {track.id && <Heart type="Tracks" targetId={track.id} />}
      {track.id && <StyledEllipsis>{icons.ellipsis}</StyledEllipsis>}
    </StyledPlaybarTrackCard>
  );
};

export default PlaybarTrackCard;

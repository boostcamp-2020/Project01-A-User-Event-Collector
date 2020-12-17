import styled from "styled-components";

const StyledDescriptionHeader = styled.div`
  display: flex;
  width: 100%;
`;

const StyledCover = styled.div`
  display: flex;
`;

const StyledInfo = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 2rem;
`;

const StyledTitle = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledArtists = styled.div`
  position: absolute;
  display: flex;
  font-size: 1.1rem;
  top: 2.1rem;
`;

const StyledDescription = styled.div`
  position: absolute;
  display: flex;
  font-size: 1rem;
  width: 40rem;
  height: 4rem;
  text-overflow: ellipsis;
  top: 4rem;
  color: #888;
`;

const StyledButtons = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  algin-items: center;
  bottom: 0rem;
`;

const StyledPlayAllButton = styled.button`
  background-color: #fe1250;
  color: #fbfbfb;
  border: none;
  height: 3rem;
  width: 9rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  text-align: center;
  outline: none;
`;

const StyledRandomPlayButton = styled.button`
  background-color: #fbfbfb;
  color: #000;
  border: 0.1rem solid #ccc;
  height: 3rem;
  width: 9rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  text-align: center;
  margin-left: 1rem;
  outline: none;
`;

const StyledMP3Button = styled.button`
  background-color: #fbfbfb;
  color: #000;
  border: 0.1rem solid #ccc;
  height: 3rem;
  width: 6rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  text-align: center;
  margin: 0rem 1rem;
  outline: none;
`;

const StyledPlaylistETCButton = styled.button`
  background-color: #fbfbfb;
  color: #000;
  height: 3rem;
  width: 4rem;
  border: none;
  font-size: 1.1rem;
  text-align: center;
  margin: 0rem;
  outline: none;
`;

const StyledIcons = styled.span`
  padding-right: 0.5rem;
`;

export {
  StyledDescriptionHeader,
  StyledCover,
  StyledInfo,
  StyledTitle,
  StyledArtists,
  StyledDescription,
  StyledButtons,
  StyledPlayAllButton,
  StyledRandomPlayButton,
  StyledMP3Button,
  StyledPlaylistETCButton,
  StyledIcons,
};

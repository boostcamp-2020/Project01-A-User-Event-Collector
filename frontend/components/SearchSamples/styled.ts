import styled from "styled-components";

const StyledSectionTitle = styled.div`
  font-size: 1.25em;
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 0.2em;
`;

const StyledSamples = styled.div`
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 3em 0em;
  & + & {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const StyledSampleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSample = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: start;
  align-itmes: center;
  margin: 0.25em 0em;
`;

const StyledCover = styled.div`
  display: block;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.5em;
`;

const StyledName = styled.div`
  display: flex;
  font-size: 1.2em;
  margin-bottom: 0.25em;
`;

const StyledArtist = styled.div`
  display: flex;
  font-size: 1.05em;
  color: #888;
`;

const StyledIcon = styled.span`
  margin-left: 0.25em;
`;

export {
  StyledSectionTitle,
  StyledSamples,
  StyledSampleWrapper,
  StyledSample,
  StyledCover,
  StyledInfo,
  StyledName,
  StyledArtist,
  StyledIcon,
};

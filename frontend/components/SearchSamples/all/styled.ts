import styled from "styled-components";

const StyledSectionTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 0.6rem;
  cursor: pointer;
`;

const StyledSamples = styled.div`
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 3rem 0rem;
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
  margin: 0.25rem 0rem;
`;

const StyledCover = styled.div`
  display: block;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
`;

const StyledName = styled.div`
  display: flex;
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
`;

const StyledArtist = styled.div`
  display: flex;
  font-size: 1.05rem;
  color: #888;
`;

const StyledIcon = styled.span`
  margin-left: 0.25rem;
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

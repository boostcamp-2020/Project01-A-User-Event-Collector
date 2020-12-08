import styled from "styled-components";

const StyledSlidebar = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 70em;
  & > a > svg {
    width: 0.7em;
    height: 0.7em;
  }
  &:nth-child(n) {
    padding-top: 1.5em;
    padding-bottom: 2.5em;
    border-bottom: 0.1em solid rgba(0, 0, 0, 0.05);
  }
`;

const StyledSlidebarTitle = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 0.2em;
`;

const SlideContainer = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 1em 0em;
  position: relative;
  width: 100%;
  height: 100%;
`;

const SlideContent = styled.ul`
  display: grid;
  grid-template-columns: repeat(20, minmax(50%, auto));
  grid-template-rows: repeat(5, minmax(20%, auto));
  grid-auto-flow: column;
  position: relative;
  width: 100%;
  height: 100%;
  padding-inline-start: 0;
`;

const StyledIcon = styled.span`
  margin-left: 0.3em;
`;

export { StyledSlidebar, StyledSlidebarTitle, SlideContainer, SlideContent, StyledIcon };

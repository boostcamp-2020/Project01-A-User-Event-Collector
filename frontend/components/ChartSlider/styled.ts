import styled from "styled-components";

const StyledSlidebar = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 70rem;
  & > a > svg {
    width: 0.7rem;
    height: 0.7rem;
  }
  &:nth-child(n) {
    padding-top: 1.5rem;
    padding-bottom: 2.5rem;
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.05);
  }
`;

const StyledSlidebarTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 0.2rem;
`;

const SlideContainer = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 1rem 0rem;
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
  margin-left: 0.3rem;
`;

export { StyledSlidebar, StyledSlidebarTitle, SlideContainer, SlideContent, StyledIcon };

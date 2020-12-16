import styled from "styled-components";
import { SlidebarProps, TranslateProps } from "./index";

const StyledSlidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

const SlideContainer = styled.div`
  overflow-x: auto;
  overflow-y: visible;
  width: 100%;
  position: relative;
`;

const StyledTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 1rem 0rem;
`;

const SlideContent = styled.ul<TranslateProps>`
  display: flex;
  & > li:first-child {
    margin: 0;
  }
  padding-inline-start: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ currentTranslateX }) => `translateX(${currentTranslateX}px)`};
`;

const StyledIcon = styled.span`
  margin-left: 0.3rem;
`;

export { StyledSlidebar, SlideContainer, StyledTitle, SlideContent, StyledIcon };

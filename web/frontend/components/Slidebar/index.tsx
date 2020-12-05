import React from "react";
import styled from "styled-components";
import { NextArrowSvg } from "../../utils/svg";
import { SliderNextButtton, SliderPreviousButton } from "../Button/SlidebarButton";
import Card from "../Card";

export interface SlidebarProps {
  varient?: string;
  dataType?: string;
  title?: string;
  titleLink?: string;
  data?: any;
}

const StyledSlidebar = styled.div<SlidebarProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  & > a > svg {
    width: 0.7rem;
    height: 0.7rem;
  }
`;

const SlideContent = styled.ul`
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  display: flex;
  position: relative;
  padding-inline-start: 0;
  & > li:first-child {
    margin: 0;
  }
`;

const Slidebar: React.FC<SlidebarProps> = ({
  varient,
  dataType,
  title,
  titleLink,
  data,
}: SlidebarProps) => {
  return (
    <StyledSlidebar varient={varient}>
      <a href={titleLink}>
        {title}
        {titleLink ? <NextArrowSvg /> : ""}
      </a>
      <SlideContent>
        {data?.map((value: any) => (
          <Card varient={varient} dataType={dataType} rawData={value} />
        ))}
        <SliderPreviousButton />
        <SliderNextButtton />
      </SlideContent>
    </StyledSlidebar>
  );
};

export default Slidebar;

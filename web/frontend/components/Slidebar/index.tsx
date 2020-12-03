import React from "react";
import styled from "styled-components";
import { NextArrowSvg } from "../../utils/svg";
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
  width: 100%;
`;

const SlideContent = styled.ul`
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  display: flex;
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
      </SlideContent>
    </StyledSlidebar>
  );
};

export default Slidebar;

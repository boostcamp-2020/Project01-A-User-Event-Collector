import React from "react";
import styled from "styled-components";
import { NextArrowSvg } from "../../utils/svg";
import Card from "../Card";

export interface SlidebarProps {
  varient?: string;
  dataType?: string;
  title?: string;
  titleLink?: string;
  data?: Object[];
}

const StyledSlidebar = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
`;

const SlideContent = styled.ul``;

const Img: React.FC<SlidebarProps> = ({
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
        {data?.map((value) => (
          <Card varient={varient} dataType={dataType} data={value} />
        ))}
      </SlideContent>
    </StyledSlidebar>
  );
};

export default Img;

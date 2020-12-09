import React, { memo } from "react";
import Img from "../Img";
import { SpecialMagLabel, PickMagLabel, GenreMagLabel } from "../MagLabel";
import {
  StyledHotMagCard,
  StyledDescription,
  StyledDescriptionLabel,
  StyledDescriptionTitle,
  StyledDescriptionContent,
  StyledDescriptionInfo,
  StyledTrivialInfo,
} from "./styled";

export enum Theme {
  Main = "main",
  Library = "library",
}

interface Props {
  theme: Theme;
  children: string;
  href: string;
  icon?: string;
}

const HotMagCard = memo(() => {
  const fetchedData = {
    title: "송우기\n멋있어",
    type: "PICK",
    description: "이게 설명이야",
    date: "2020-10-02",
  };

  const { title, type, description, date } = fetchedData;

  return (
    <StyledHotMagCard>
      <Img varient="todayBig" src="https://i.ytimg.com/vi/ZTsGTGjQc_M/maxresdefault.jpg" />
      <StyledDescription>
        <StyledDescriptionLabel>
          {type === "SPECIAL" ? (
            <SpecialMagLabel />
          ) : type === "PICK" ? (
            <PickMagLabel />
          ) : (
            <GenreMagLabel />
          )}
        </StyledDescriptionLabel>
        <StyledDescriptionTitle>{title}</StyledDescriptionTitle>
        <StyledDescriptionContent>{description}</StyledDescriptionContent>
        <StyledDescriptionInfo>
          <StyledTrivialInfo>VIBE MAG-{date}</StyledTrivialInfo>
        </StyledDescriptionInfo>
      </StyledDescription>
    </StyledHotMagCard>
  );
});

export default HotMagCard;
export type { Props };

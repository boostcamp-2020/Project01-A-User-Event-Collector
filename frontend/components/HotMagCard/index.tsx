import React, { memo } from "react";
import Link from "next/link";
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

interface Magazine {
  magazineName: string;
  magazineType: string;
  description: string;
  createdAt: string;
  cover: string;
  playlistId: number;
}

interface HotMagProps {
  magazine: Magazine;
}

const HotMagCard = memo(({ magazine }: HotMagProps) => {
  const { magazineName, magazineType, description, createdAt, cover, playlistId } = magazine;

  return (
    <Link href={`/magazines/${playlistId}`}>
      <StyledHotMagCard>
        <Img varient="todayBig" src={cover} />
        <StyledDescription>
          <StyledDescriptionLabel>
            {magazineType === "SPECIAL" ? (
              <SpecialMagLabel />
            ) : magazineType === "PICK" ? (
              <PickMagLabel />
            ) : (
              <GenreMagLabel />
            )}
          </StyledDescriptionLabel>
          <StyledDescriptionTitle>{magazineName}</StyledDescriptionTitle>
          <StyledDescriptionContent>{description}</StyledDescriptionContent>
          <StyledDescriptionInfo>
            <StyledTrivialInfo>VIBE MAG-{createdAt}</StyledTrivialInfo>
          </StyledDescriptionInfo>
        </StyledDescription>
      </StyledHotMagCard>
    </Link>
  );
});

export default HotMagCard;
export type { Props };

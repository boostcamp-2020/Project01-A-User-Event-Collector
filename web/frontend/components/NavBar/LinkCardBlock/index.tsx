import React, { memo } from "react";
import LinkCard from "./LinkCard";
import StyledLinkCardBlock from "./styled";

export enum Theme {
  Main = "main",
  Library = "library",
}

interface Props {
  theme: Theme;
}

const LinkCardBlock = memo(({ theme }: Props) => {
  const arr: { name: string; icon?: string; href: string }[] =
    theme === Theme.Main
      ? [
          { name: "투데이", icon: "home", href: "/today" },
          { name: "차트", icon: "chart", href: "/chart" },
          { name: "DJ 스테이션", icon: "dj", href: "/dj-stations" },
          { name: "VIBE MAG", icon: "mag", href: "/magazines" },
        ]
      : [
          { name: "노래", href: "/library/tracks" },
          { name: "플레이리스트", href: "/library/playlists" },
        ];
  return (
    <>
      {arr.map((el: any) => (
        <StyledLinkCardBlock>
          <LinkCard theme={theme} icon={el.icon} key={el.name} href={el.href}>
            {el.name}
          </LinkCard>
        </StyledLinkCardBlock>
      ))}
    </>
  );
});

export default LinkCardBlock;
export type { Props };

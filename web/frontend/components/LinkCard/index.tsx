import React, { memo, MouseEvent } from "react";
import { useRouter } from "next/router";
import StyledLinkCard from "./styled";

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

const LinkCard = memo(({ theme, children, icon, href }: Props) => {
  const router = useRouter();
  const handleRouter = (e: MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <a href={href} onClick={handleRouter}>
      <StyledLinkCard theme={theme} icon={icon || ""}>
        {children}
      </StyledLinkCard>
    </a>
  );
});

export default LinkCard;
export type { Props };

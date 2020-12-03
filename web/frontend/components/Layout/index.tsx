import React, { ReactNode, memo } from "react";
import Head from "next/head";
import NavBar from "../NavBar";
import { StyledLayout, StyledContent } from "./styled";

type Props = {
  children: ReactNode | undefined;
  title: string;
};

const Layout = ({ children, title = "MINI VIBE" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <StyledLayout>
      <NavBar />
      <StyledContent>{children}</StyledContent>
    </StyledLayout>
  </div>
);

export default Layout;

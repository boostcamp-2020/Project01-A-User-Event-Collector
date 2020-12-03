import React, { ReactNode, memo } from "react";
import NavBar from "../NavBar";
import Playbar from "../Playbar";
import { StyledLayout, StyledContent } from "./styled";

type Props = {
  children: ReactNode | undefined;
};

const Layout = memo(({ children }: Props) => (
  <div>
    <StyledLayout>
      <NavBar />
      <StyledContent>{children}</StyledContent>
    </StyledLayout>
    <Playbar />
  </div>
));

export default Layout;

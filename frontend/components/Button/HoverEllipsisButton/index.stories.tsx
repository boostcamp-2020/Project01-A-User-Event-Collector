import React from "react";
import HoverEllipsisButton, { StyledEllipsisButton } from ".";
import { EllipsisSvg } from "../../../utils/svg";

export default {
  title: "EllipsisButton",
  component: HoverEllipsisButton,
};

export const EllipsisButton: React.FC = () => {
  return (
    <StyledEllipsisButton>
      <EllipsisSvg />
    </StyledEllipsisButton>
  );
};

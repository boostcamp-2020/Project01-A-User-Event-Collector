import React from "react";
import styled from "styled-components";
import icons from "../../../constant/icons";

export const StyledLikeButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-color: white;
  border-radius: 50%;
  border: 0px;
  position: absolute;
  left: 10%;
  bottom: 10%;
`;

const StyledHeart = styled.div``;

const LikeButton: React.FC = () => {
  return (
    <StyledLikeButton>
      <StyledHeart>{icons.emptyHeart}</StyledHeart>
    </StyledLikeButton>
  );
};

export default LikeButton;

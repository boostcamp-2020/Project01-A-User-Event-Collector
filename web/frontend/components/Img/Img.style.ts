import styled from "styled-components";

const StyledImg = styled.img`
  object-fit: cover;
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  src: ${({ src }) => src};
`;

export default StyledImg;

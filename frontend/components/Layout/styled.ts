import styled from "styled-components";

const StyledLayout = styled.div`
  display: flex;
  height: 100vh;
`;

const StyledContent = styled.div`
  display: block;
  position: relative;
  box-sizing: border-box;
  left: 15em;
  width: 100%;
  background-color: #fff;
  padding: 0em 10em;
`;

export { StyledLayout, StyledContent };

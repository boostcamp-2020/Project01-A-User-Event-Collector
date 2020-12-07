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
  width: calc(100% - 15em);
  background-color: #f2f2f2;
  padding: 0em 10em;
`;

export { StyledLayout, StyledContent };

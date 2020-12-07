import styled from "styled-components";

const StyledLayout = styled.div`
  display: flex;
  height: 100vh;
`;

const StyledSearchBar = styled.div`
  display: flex;
  position: fixed;
  z-index: 10;
  top: 0em;
  background-color: #fff;
  width: calc(100vw - 15em);
  right: 0em;
  height: 5em;
  justify-content: center;
  align-items: center;
`;

const StyledContent = styled.div`
  display: block;
  position: relative;
  box-sizing: border-box;
  left: 15em;
  width: calc(100% - 15em);
  background-color: #fff;
  padding: 0em 10em;
`;

export { StyledLayout, StyledContent, StyledSearchBar };

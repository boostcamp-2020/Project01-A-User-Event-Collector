import styled, { keyframes } from "styled-components";

const StyledLayout = styled.div`
  display: flex;
  height: 100vh;
`;

const showSearchBar = keyframes`
  0% {
    top: -5rem;
  }
  50% {
    top: -2.5rem;
  }
  100% {
    top: 0rem;
  }
`;

const StyledSearchBar = styled.div`
  display: flex;
  position: fixed;
  z-index: 10;
  top: 0rem;
  background-color: #fff;
  width: calc(100vw - 15rem);
  right: 0rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  transition: width 2s, height 4s;
  animation: ${showSearchBar} 0.1s 0s linear;
`;

const StyledContent = styled.div`
  display: block;
  position: relative;
  box-sizing: border-box;
  left: 15rem;
  width: calc(100% - 15rem);
  background-color: #fff;
  padding: 0rem 10rem;
`;

export { StyledLayout, StyledContent, StyledSearchBar };

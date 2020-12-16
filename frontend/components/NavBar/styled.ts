import styled from "styled-components";

const StyledNavBar = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  background-color: #000;
  width: 14vw;
  min-height: 100%;
  box-sizing: border-box;
  padding: 1.5rem;
  z-index: 9;
`;

const StyledLibrary = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const StyledLibraryText = styled.div`
  display: flex;
  font-size: 0.9rem;
  color: #444;
`;

export { StyledNavBar, StyledLibrary, StyledLibraryText };

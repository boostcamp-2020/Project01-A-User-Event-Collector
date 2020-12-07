import styled from "styled-components";

const StyledSearchBar = styled.div`
  display: flex;
  width: 95%;
  height: 75%;
  border: 0.25em solid #b6daff;
  border-radius: 0.75em;
  justify-content: center;
  align-items: center;
`;

const StyledSearchIcon = styled.div`
  display: flex;
  width: 3%;
  justify-content: center;
  align-items: center;
`;

const StyledSearchInput = styled.input`
  display: flex;
  width: 94%;
  height: 75%;
  font-size: 1.5em;
  caret-color: #ff015f;
  border: none;
  outline: none;
`;

const StyledClosingIcon = styled.div`
  display: flex;
  width: 3%;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.div`
  font-size: 1.5em;
  color: #777;
`;

export { StyledSearchBar, StyledSearchIcon, StyledSearchInput, StyledClosingIcon, StyledText };

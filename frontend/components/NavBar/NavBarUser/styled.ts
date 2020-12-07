import styled from "styled-components";

const StyledNavUser = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 1em 0em;
  margin: 1.5em 0em;
  border-top: 0.1em solid #282828;
  border-bottom: 0.1em solid #282828;
  &: hover {
    cursor: pointer;
  }
`;

const StyledUser = styled.div`
  padding-left: 0.4em;
  margin-left: 0.3em;
  font-size: 1.25em;
  ${({ loggedIn }: { loggedIn: boolean }) => {
    return loggedIn
      ? `
        line-height: 1.25em;
        color: #ccc;
        `
      : `
        line-height: 1em;
        color: #888;
        `;
  }}
  &: hover {
    color: #fff;
  } ;
`;

export { StyledNavUser, StyledUser };

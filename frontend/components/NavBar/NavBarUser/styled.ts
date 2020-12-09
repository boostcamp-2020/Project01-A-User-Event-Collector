import styled from "styled-components";

const StyledNavUser = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 0rem;
  margin: 1.5rem 0rem;
  border-top: 0.1rem solid #282828;
  border-bottom: 0.1rem solid #282828;
  &: hover {
    cursor: pointer;
  }
`;

const StyledUser = styled.div`
  padding-left: 0.4rem;
  margin-left: 0.3rem;
  font-size: 1.25rem;
  ${({ loggedIn }: { loggedIn: boolean }) => {
    return loggedIn
      ? `
        line-height: 1.25rem;
        color: #ccc;
        `
      : `
        line-height: 1rem;
        color: #888;
        `;
  }}
  &: hover {
    color: #fff;
  } ;
`;

export { StyledNavUser, StyledUser };

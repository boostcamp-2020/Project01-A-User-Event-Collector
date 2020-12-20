import styled from "styled-components";

const StyledNavUser = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 0rem;
  margin: 1.5rem 0rem;
  border-top: 0.1rem solid #282828;
  border-bottom: 0.1rem solid #282828;
  &:hover {
    cursor: pointer;
  }
`;

const StyledUser = styled.div`
  padding-left: 0.4rem;
  margin-left: 0.3rem;
  font-size: 1.25rem;
  ${({ isLogged }: { isLogged: boolean }) => {
    return isLogged
      ? `
        line-height: 1.25rem;
        color: #ccc;
        `
      : `
        line-height: 1rem;
        color: #888;
        `;
  }}
  &:hover {
    color: #fff;
  } ;
`;

const StyledModal = styled.div`
  display: flex;
  position: absolute;
  top: 3.5rem;
  left: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  border-radius: 0.25rem;
  width: 7rem;
`;

const StyledModalCard = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 1rem 0rem;
  justify-content: left;
  align-items: center;
`;

const StyledIcon = styled.span`
  margin-left: 0.5rem;
`;

export { StyledNavUser, StyledUser, StyledModal, StyledModalCard, StyledIcon };

import React from "react";
import styled from "styled-components";
// import Modal from "../../Modal";
const StyleButtonBox = styled.div`
  display: flex;
`;

const ButtonBox = () => {
  return (
    <StyleButtonBox>
      <button>전체재생</button>
      <button>좋아요</button>
      <button>모달</button>
      {/* <Modal>ASDASD</Modal> */}
    </StyleButtonBox>
  );
};

export default ButtonBox;

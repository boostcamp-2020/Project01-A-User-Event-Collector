import React, { useState } from "react";
import styled from "styled-components";
import icons from "../../../constant/icons";
import { Track } from "../../../interfaces";
import myAxios from "../../../utils/myAxios";

const StyledModalLayer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 501;
`;
const StyledModal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 2rem;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1001;
  width: 22rem;
  height: 12rem;
  background-color: white;
  border-radius: 1.25%;
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const StyledPlaylistListInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
  width: 100%;
`;

const StyledInput = styled.input`
  type: text;
  border: 0.2rem solid #015fcc;
  height: 2.5rem;
  background-color: #eee;
  box-sizing: border-box;
  padding: 0rem 0.5rem;
  outline: none;
`;

const StyledPlaylistButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;
  width: 11rem;
`;

const StyledCancelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 100%;
  border: 0.1rem solid #ccc;
  border-radius: 0.25rem;
  background-color: #fefefe;
  outline: none;
`;

const StyledInvalidVerifyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 100%;
  border: none;
  border-radius: 0.25rem;
  outline: none;
  color: #fff;
  background-color: #ccc;
  cursor: normal;
`;

const StyledValidVerifyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 100%;
  border: none;
  border-radius: 0.25rem;
  outline: none;
  color: #fff;
  background-color: #fe1250;
  cursor: pointer;
`;

interface Props {
  tracks: Track[];
}

const NewPlaylistModal: React.FC<Props> = () => {
  const [input, setInput] = useState("");

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  return (
    <StyledModalLayer>
      <StyledModal>
        <StyledTitle>새 플레이리스트</StyledTitle>
        <StyledPlaylistListInput>
          <StyledInput
            type="text"
            placeholder="플레이리스트 이름을 입력해 주세요"
            value={input}
            onChange={handleInput}
          />
        </StyledPlaylistListInput>
        <StyledPlaylistButtons>
          <StyledCancelButton>취소</StyledCancelButton>
          {input.length === 0 ? (
            <StyledInvalidVerifyButton>확인</StyledInvalidVerifyButton>
          ) : (
            <StyledValidVerifyButton>확인</StyledValidVerifyButton>
          )}
        </StyledPlaylistButtons>
      </StyledModal>
    </StyledModalLayer>
  );
};

export default NewPlaylistModal;

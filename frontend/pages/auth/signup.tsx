import React, { useState, FC, ChangeEvent, MouseEvent } from "react";
import Router from "next/router";
import styled from "styled-components";
import myAxios from "../../utils/myAxios";

const StyledSignupPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 5rem 0rem;
  width: 100%;
  height: 100%;
`;

const StyledForm = styled.div`
  display: flex;
  width: 32rem;
  height: 23rem;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 3rem 1.5rem;
  align-items: center;
  border: 0.1rem solid #afafaf;
  border-radius: 0.5rem;
  box-shadow: 0.25rem 0.25rem #ff115012;
`;

const StyledTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const StyledUsername = styled.div`
  display: flex;
`;

const StyledPassword = styled.div`
  display: flex;
`;

const StyledLabel = styled.div`
  width: 8rem;
  font-size: 1.25rem;
  margin-right: 0.5em;
`;

const StyledInput = styled.input`
  type: text;
  width: 15rem;
  font-size: 1.25rem;
`;

const StyledBtns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 16rem;
`;

const StyledSubmitBtn = styled.button`
  width: 7rem;
  height: 2.5rem;
  background-color: #ff1e54;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  outline: none;
  cursor: pointer;
`;

const StyledToLoginBtn = styled.button`
  width: 7rem;
  height: 2.5rem;
  background-color: ##fbfbfb;
  border: none;
  border-radius: 0.25rem;
  outline: none;
  cursor: pointer;
`;

const LoginPage: FC = () => {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePassword1 = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword1(e.target.value);
  };
  const handlePassword2 = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword2(e.target.value);
  };

  const handleSubmit = (e: MouseEvent) => {
    if (!username || !password1 || !password2) {
      alert("유저명과 비밀번호를 입력해주세요.");
      return;
    }
    const userform = {
      username,
      password1,
      password2,
    };
    myAxios.post("/auth/signup", userform).then((response: any) => {
      const {
        data: { result },
      } = response;
      if (result === "success") {
        Router.push("login");
      } else {
        alert("이미 존재하는 아이디이거나 비밀번호1과 2가 일치하지 않습니다.");
      }
    });
  };

  const handleLink = (e: MouseEvent) => {
    Router.push("/auth/login");
  };

  return (
    <StyledSignupPage>
      <StyledForm>
        <StyledTitle>회원가입</StyledTitle>
        <StyledUsername>
          <StyledLabel>유저명:</StyledLabel>{" "}
          <StyledInput value={username} onChange={handleUsername} />
        </StyledUsername>
        <StyledPassword>
          <StyledLabel>비밀번호:</StyledLabel>{" "}
          <StyledInput type="password" value={password1} onChange={handlePassword1} />
        </StyledPassword>
        <StyledPassword>
          <StyledLabel>비밀번호 확인:</StyledLabel>{" "}
          <StyledInput type="password" value={password2} onChange={handlePassword2} />
        </StyledPassword>
        <StyledBtns>
          <StyledSubmitBtn onClick={handleSubmit}>Submit</StyledSubmitBtn>
          <StyledToLoginBtn onClick={handleLink}>To Login</StyledToLoginBtn>
        </StyledBtns>
      </StyledForm>
    </StyledSignupPage>
  );
};

export default LoginPage;

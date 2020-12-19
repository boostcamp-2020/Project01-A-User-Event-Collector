import React, { useState, FC, ChangeEvent } from "react";
import Router from "next/router";
import styled from "styled-components";
import { redirect } from "next/dist/next-server/server/api-utils";
import myAxios from "../../utils/myAxios";

const StyledLoginPage = styled.div`
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
  height: 20rem;
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

const StyledToSignupBtn = styled.button`
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
  const [password, setPassword] = useState("");

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePassword1 = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: MouseEvent) => {
    if (!username || !password) {
      alert("유저명과 비밀번호를 입력해주세요.");
      return;
    }
    const userform = {
      username,
      password,
    };
    myAxios.post("/auth/login", userform).then((response: any) => {
      const {
        data: { result, token },
      } = response;
      if (result === "success") {
        localStorage.setItem("token", token);
        Router.push("/today").then(() => {
          Router.reload();
        });
      } else {
        alert("유저명과 비밀번호를 다시 확인해주세요.");
      }
    });
  };

  const handleLink = (e: MouseEvent) => {
    Router.push("/auth/signup");
  };

  return (
    <StyledLoginPage>
      <StyledForm>
        <StyledTitle>로그인</StyledTitle>
        <StyledUsername>
          <StyledLabel>유저명:</StyledLabel>{" "}
          <StyledInput value={username} onChange={handleUsername} />
        </StyledUsername>
        <StyledPassword>
          <StyledLabel>비밀번호:</StyledLabel>{" "}
          <StyledInput type="password" value={password} onChange={handlePassword1} />
        </StyledPassword>
        <StyledBtns>
          <StyledSubmitBtn onClick={handleSubmit}>Submit</StyledSubmitBtn>
          <StyledToSignupBtn onClick={handleLink}>To Signup</StyledToSignupBtn>
        </StyledBtns>
      </StyledForm>
    </StyledLoginPage>
  );
};

export default LoginPage;

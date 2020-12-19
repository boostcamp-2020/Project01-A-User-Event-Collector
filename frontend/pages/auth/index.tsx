import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";

interface Props {
  token: string;
}

const AuthPage: React.FC<Props> = ({ token }: Props) => {
  const router = useRouter();
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) return <>Loading Login Data</>;

  localStorage.setItem("token", token);

  router.push("/");
  return <></>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { code, state },
  } = context;

  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  const loginApiUrl = `${apiUrl}:${apiPort}/api/auth/naver?code=${code}&state=${state}`;
  const response = await fetch(loginApiUrl);
  const { token } = await response.json();

  return {
    props: { token },
  };
};

export default AuthPage;

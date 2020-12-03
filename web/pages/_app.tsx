import { AppProps } from "next/app";
import Head from "next/head";
import { memo } from "react";
import Layout from "../frontend/components/Layout";

const MyApp = memo(({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>MINI VIBE</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
});

export default MyApp;

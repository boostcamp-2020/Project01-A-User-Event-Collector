import { AppProps } from "next/app";
import { memo } from "react";
import { createGlobalStyle } from "styled-components";
import Layout from "../components/Layout";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  a{
      text-decoration:none;
      color:inherit;
  }

  body{
      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 14px;
      background-color:rgba(20,20,20,1);
  }
  
  body > div:first-child, div#__next, div#__next > div, div#__next > div > div {
    height : 100%
  }
`;

const MyApp = memo(({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
});

export default MyApp;

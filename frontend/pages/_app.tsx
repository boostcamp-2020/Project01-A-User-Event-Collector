import { AppProps } from "next/app";
import { Provider, useDispatch } from "react-redux";
import { createStore } from "redux";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import React, { FC, memo, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { rootReducer } from "../reduxModules";
import { initCheckedTrack } from "../reduxModules/checkedTrack";

// useEffect(() => {
//   // dispatch(initCheckedTrack());
//   console.log("asdasd");
// }, []);
const GlobalStyles = createGlobalStyle`
  ${reset};
  a{
      text-decoration:none;
      color:inherit;
  }

  body{
      position : relative;
      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 14px;
      background-color:rgba(20,20,20,1);
  }
  
  body > div:first-child, div#__next, div#__next > div, div#__next > div > div {
    height : 100%
  }
`;

const store = createStore(rootReducer);
const MyApp: FC<any> = memo(({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    console.log("asdasd");
  }, [router.pathname]);

  return (
    <Provider store={store}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
});

export default MyApp;

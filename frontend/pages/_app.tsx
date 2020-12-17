import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import React, { FC, memo, useState } from "react";
import Layout from "../components/Layout";
import { rootReducer } from "../reduxModules";
import Playbar from "../components/Playbar";
import { StyledBlockingOverlay } from "../components/Layout/styled";
import Overlay from "../components/Layout/Overlay";

const GlobalStyles = createGlobalStyle`
  ${reset};
  a{
      text-decoration:none;
      color:inherit;
  }

  body{
      position : absolute;
      top: 0px;
      left: 0px;
      width: 100%;
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
  const [showPlaylist, setShowPlaylist] = useState(false);

  const handleShowPlaylist = (e: any): void => {
    setShowPlaylist(!showPlaylist);
  };

  return (
    <Provider store={store}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {showPlaylist && (
        <>
          <StyledBlockingOverlay />
          <Overlay />
        </>
      )}
      <Playbar handleShowPlaylist={handleShowPlaylist} showPlaylist={showPlaylist} />
    </Provider>
  );
});

export default MyApp;

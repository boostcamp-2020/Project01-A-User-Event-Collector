import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import React, { FC, memo, useState } from "react";
import Layout from "../components/Layout";
import { rootReducer } from "../reduxModules";
import { Collector, EventObject } from "../event";
import sendLog from "../utils/sendLog";

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

// Event object
const eventObj: EventObject = {
  simple: {
    playButton: {
      event_id: 1,
      event_type: ["click"],
      description: "재생버튼 클릭함",
    },
    volumeButton: {
      event_id: 3,
      event_type: ["click"],
      description: "볼륨 조절",
    },
  },

  complex: {
    playButtonX3: {
      event_id: 2,
      timer: 1000,
      sequence: ["playButton", "volumeButton"],
      description: "기본 음량이 저랑 좀 안맞네요..",
    },
  },
};

const starConsole = (e: any) => {
  console.log("****************");
  console.log(e);
  console.log("*********");
};

// Collector
const store = createStore(rootReducer);
const MyApp: FC<any> = memo(({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      {/* <Collector eventConfig={eventObj} dispatch={console.log}> */}
      <Collector eventConfig={eventObj} dispatch={sendLog}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Collector>
    </Provider>
  );
});

export default MyApp;

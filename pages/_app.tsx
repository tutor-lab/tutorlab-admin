import "../styles/globals.css";
import "../styles/classcard.module.scss";
import React from "react";
import { wrapper } from "../redux/store";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Component {...pageProps} >
    </Component>
  </>);
}

export default wrapper.withRedux(MyApp);


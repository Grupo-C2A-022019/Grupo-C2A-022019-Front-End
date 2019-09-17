import App from "next/app";
import React from "react";

import * as api from "lib/api";
import { ApiProvider } from "contexts/api";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ApiProvider api={api}>
        <Component {...pageProps} />
      </ApiProvider>
    );
  }
}

export default MyApp;

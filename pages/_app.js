import App from "next/app";
import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from "components/theme";
import * as api from "lib/api";
import { ApiProvider } from "contexts/api";
import { I18nProvider } from "contexts/i18n";
import { getMessages } from "lib/i18n";
import initialMessages from "static/messages_es.json";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, initialMessages };
  }

  constructor(props) {
    super(props);

    this.state = {
      messages: props.initialMessages
    };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  setLang = lang => {
    getMessages(lang).then(messages =>
      this.setState(prevState => ({ ...prevState, messages }))
    );
  };

  render() {
    const { Component, pageProps } = this.props;
    const { messages } = this.state;

    return (
      <I18nProvider messages={messages} onLangChange={this.setLang}>
        <ThemeProvider theme={theme}>
          <ApiProvider api={api}>
            <CssBaseline />
            <Component {...pageProps} />
          </ApiProvider>
        </ThemeProvider>
      </I18nProvider>
    );
  }
}

export default MyApp;

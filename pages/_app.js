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
import { AuthProvider } from "contexts/auth";

const LOCAL_STORAGE_AUTH_KEY = "auth";

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

    let initialAuth;
    if (process.browser) {
      try {
        initialAuth = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY));
      } catch {}
    }

    this.state = {
      auth: initialAuth,
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

  setUser = auth => {
    localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(auth));
    this.setState(prevState => ({ ...prevState, auth }));
  };

  render() {
    const { Component, pageProps } = this.props;
    const { messages, auth } = this.state;

    return (
      <AuthProvider auth={auth} setAuth={this.setUser}>
        <I18nProvider messages={messages} onLangChange={this.setLang}>
          <ThemeProvider theme={theme}>
            <ApiProvider api={api}>
              <CssBaseline />
              <Component {...pageProps} />
            </ApiProvider>
          </ThemeProvider>
        </I18nProvider>
      </AuthProvider>
    );
  }
}

export default MyApp;

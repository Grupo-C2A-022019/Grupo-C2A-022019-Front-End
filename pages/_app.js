import App from "next/app";
import React, { useState, useCallback } from "react";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from "components/theme";
import * as api from "lib/api";
import { ApiProvider } from "contexts/api";
import { I18nProvider } from "contexts/i18n";
import { getMessages } from "lib/i18n";
import initialMessages from "static/messages_es.json";

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
      auth: initialAuth
    };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { initialMessages, Component, pageProps } = this.props;
    const { auth } = this.state;

    return (
      <AppState initialAuth={auth} initialMessages={initialMessages}>
        <CssBaseline />
        <Component {...pageProps} />
      </AppState>
    );
  }
}

export default MyApp;

function AppState({ initialAuth, initialMessages, children }) {
  const [messages, setMessages] = useState(initialMessages);

  const setLang = useCallback(lang => {
    getMessages(lang).then(setMessages);
  }, []);

  return (
    <I18nProvider messages={messages} onLangChange={setLang}>
      <ThemeProvider theme={theme}>
        <ApiProvider api={api}>{children}</ApiProvider>
      </ThemeProvider>
    </I18nProvider>
  );
}

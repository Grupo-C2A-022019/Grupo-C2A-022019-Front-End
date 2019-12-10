import App from "next/app";
import React, { useState, useCallback, useEffect, useMemo } from "react";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from "components/theme";

import { ApiProvider } from "contexts/api";
import { I18nProvider } from "contexts/i18n";

import { getMessages } from "lib/i18n";
import createApi from "lib/api";

import useUser from "hooks/useUser";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppState>
        <CssBaseline />
        <Component {...pageProps} />
      </AppState>
    );
  }
}

export default MyApp;

const allLangs = ["es", "en"];
function AppState({ children }) {
  const [lang, setLang] = useState("es");
  const [messages, setMessages] = useState({});

  const { user } = useUser();
  const accessToken = user && user.accessToken;
  const api = useMemo(() => createApi(accessToken), [accessToken]);

  useEffect(() => {
    getMessages(lang).then(setMessages);
  }, [lang]);

  return (
    <I18nProvider
      messages={messages}
      langs={allLangs}
      currentLang={lang}
      onLangChange={setLang}
    >
      <ThemeProvider theme={theme}>
        <ApiProvider api={api}>{children}</ApiProvider>
      </ThemeProvider>
    </I18nProvider>
  );
}

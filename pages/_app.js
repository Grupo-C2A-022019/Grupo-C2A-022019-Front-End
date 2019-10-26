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
import { AuthProvider } from "contexts/auth";
import { ShoppingCartProvider } from "contexts/shoppingCart";

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
  const [auth, setAuth] = useState(initialAuth);

  const setUser = useCallback(newAuth => {
    localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(newAuth));
    setAuth(newAuth);
  }, []);

  const [messages, setMessages] = useState(initialMessages);

  const setLang = useCallback(lang => {
    getMessages(lang).then(setMessages);
  }, []);

  const [shoppingCart, setShoppingCart] = useState([]);

  const addToCart = useCallback(menu => {
    setShoppingCart(oldShoppingCart => oldShoppingCart.concat(menu));
  }, []);

  return (
    <AuthProvider auth={auth} setAuth={setUser}>
      <I18nProvider messages={messages} onLangChange={setLang}>
        <ShoppingCartProvider shoppingCart={shoppingCart} addToCart={addToCart}>
          <ThemeProvider theme={theme}>
            <ApiProvider api={api}>{children}</ApiProvider>
          </ThemeProvider>
        </ShoppingCartProvider>
      </I18nProvider>
    </AuthProvider>
  );
}

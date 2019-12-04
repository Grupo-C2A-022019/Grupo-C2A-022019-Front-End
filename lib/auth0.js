import { initAuth0 } from "@auth0/nextjs-auth0";
import getConfig from "next/config";

const {
  serverRuntimeConfig: {
    AUTH0_DOMAIN,
    AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET,
    AUTH0_SCOPE,
    REDIRECT_URI,
    POST_LOGOUT_REDIRECT_URI,
    SESSION_COOKIE_SECRET,
    SESSION_COOKIE_LIFETIME
  }
} = getConfig();

export default initAuth0({
  clientId: AUTH0_CLIENT_ID,
  clientSecret: AUTH0_CLIENT_SECRET,
  scope: AUTH0_SCOPE,
  domain: AUTH0_DOMAIN,
  redirectUri: REDIRECT_URI,
  postLogoutRedirectUri: POST_LOGOUT_REDIRECT_URI,
  session: {
    storeIdToken: true,
    storeAccessToken: true,
    cookieSecret: SESSION_COOKIE_SECRET,
    cookieLifetime: SESSION_COOKIE_LIFETIME
  }
});

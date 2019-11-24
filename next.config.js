const path = require("path");
require("dotenv").config();
const withImages = require("next-images");

module.exports = withImages({
  webpack(config, options) {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["constants"] = path.join(__dirname, "constants");
    config.resolve.alias["contexts"] = path.join(__dirname, "contexts");
    config.resolve.alias["hooks"] = path.join(__dirname, "hooks");
    config.resolve.alias["lib"] = path.join(__dirname, "lib");
    config.resolve.alias["static"] = path.join(__dirname, "static");
    return config;
  },

  serverRuntimeConfig: {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_SCOPE: "openid profile",
    REDIRECT_URI:
      process.env.REDIRECT_URI || "http://localhost:3000/api/callback",
    POST_LOGOUT_REDIRECT_URI:
      process.env.POST_LOGOUT_REDIRECT_URI || "http://localhost:3000/",
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    SESSION_COOKIE_LIFETIME: 7200 // 2 hours
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    apiUrl:
      process.env.NODE_ENV !== "production" ? "/api/v1" : process.env.API_URL,
    googleMapApiKey: process.env.GOOGLE_MAP_APIKEY
  }
});

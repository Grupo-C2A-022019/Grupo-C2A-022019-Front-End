const path = require('path')
require('dotenv').config()
const withImages = require('next-images')

module.exports = withImages({
  webpack (config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['contexts'] = path.join(__dirname, 'contexts')
    config.resolve.alias['hooks'] = path.join(__dirname, 'hooks')
    config.resolve.alias['lib'] = path.join(__dirname, 'lib')
    config.resolve.alias['static'] = path.join(__dirname, 'static')
    return config
  },

  serverRuntimeConfig: { // Will only be available on the server side
  },
  publicRuntimeConfig: { // Will be available on both server and client
    apiUrl: process.env.NODE_ENV !== 'production' ? '/api' : process.env.API_URL,
    googleMapApiKey: process.env.GOOGLE_MAP_APIKEY,
    facebookAppId: process.env.FACEBOOK_APP_ID
  }
})

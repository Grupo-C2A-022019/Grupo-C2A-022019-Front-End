const path = require('path')

module.exports = {
  webpack (config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['hooks'] = path.join(__dirname, 'hooks')
    config.resolve.alias['lib'] = path.join(__dirname, 'lib')
    return config
  }
}

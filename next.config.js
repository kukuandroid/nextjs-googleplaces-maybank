
module.exports = {
  env: {
    google_maps_api_key: 'AIzaSyACuixL6nM4aQk9BGdz4v3LEjaXp8883kw'
  },
  webpack (config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  }
}

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://world.openfoodfacts.org/',
        ws: true,
        changeOrigin: true
      }
    }
  }
}

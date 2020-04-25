module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.edamam.com/',
        ws: true,
        changeOrigin: true
      }
    }
  }
}

const devServerConfig = {
  host: 'localhost',
  port: 8003,
  overlay: { // 在网页显示错误信息
    errors: true
  },
  historyApiFallback: true,
  hot: true, //热更新
  open: true, //打开浏览器
  openPage: 'jsl-vue-h5/home' //默认打开的地址
}

module.exports = devServerConfig

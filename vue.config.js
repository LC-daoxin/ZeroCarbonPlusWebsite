module.exports = {
  devServer: {
    disableHostCheck: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8001', // 接口域名
    //     secure: false, // 如果是https接口，需要配置这个参数
    //     changeOrigin: true, //是否跨域
    //     pathRewrite: {
    //       '^/api': '/api' //需要rewrite的,
    //     }
    //   }
    // }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac|m4a)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'media/[name].[ext]',
          },
        },
      ]
    },
  },
  transpileDependencies: [
    'vuetify',
  ],
}

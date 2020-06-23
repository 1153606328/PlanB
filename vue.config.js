
module.exports = {
    devServer: {
      port: 8080,
      // open: true, //配置自动启动浏览器
    //   https://www.easy-mock.com/mock/5d14342427a7e80b4b3451f1/easy
    //   5d14342427a7e80b4b3451f1
      proxy: {
        "/api": {
          target: "http://localhost:8080", //后端ip地址及端口
          ws: true, //是否跨域
          changeOrigin: true,
          pathRewrite: {
            "^/api": "/data"
          }
        }   
      }
    }
  };
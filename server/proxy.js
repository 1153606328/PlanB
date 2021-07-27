var express = require('express');
const { createProxyMiddleware } = require("http-proxy-middleware");
var app = express();
app.use(express.static('./public'));
app.use('/api',createProxyMiddleware({
	target: "http://panhuaqing.cn:3000", //后端ip地址及端口
	changeOrigin:false,
	pathRewrite: {
	  "^/api": ""
	}
}))
app.listen(5000);
console.log('success listen at port:5000......');
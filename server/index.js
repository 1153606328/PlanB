const express = require('express');
const app = express();
const query = require('./api/StuApi')
const sqlMap = require('./sqlMap')
const bodyParser = require('body-parser')
//设置跨域访问
app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
  // //允许的header类型
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  // //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  // 可以带cookies
  res.header("Access-Control-Allow-Credentials", true);
  if (req.method == 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(express.urlencoded({ extended: false }));
//使用express.Router() 分配路由，让界面没那么长
const msgRouter = require('./router/massage.js')
const caseRouter = require('./router/case.js')
//路由=>模块
//'msg'到 msgRouter文件找接口方法
app.use('/msg',msgRouter)
app.use('/case',caseRouter)

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');
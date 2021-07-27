const express = require('express');
const router = express.Router()

const query = require('../api/StuApi.js')
const sqlMap = require('../sqlMap.js')

//查询
router.get('/query', (req, res, next) => {
  query(sqlMap.message.query,function(err,vals,fields){
    console.log(vals)
    res.json({
      data: vals,
	  code:200
    })
  });
})
//添加
router.post('/add', (req, res, next) => {
  let addSql = 'INSERT INTO message_list SET?';
  let Params =req.body;
    query( addSql,Params,function(err,vals,fields){
    res.json({
      data:"测试"
    })
  });
  // req.on('data',function(data){
  // 		obj=JSON.parse(data);
  // 		console.log(obj);
  // 		res.send('数据已接收')
  // 	})
})

module.exports = router ; 
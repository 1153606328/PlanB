const express = require('express');
const router = express.Router()

const query = require('../api/StuApi.js')
const sqlMap = require('../sqlMap.js')
	
//查询
router.get('/query', (req, res, next) => {
  query(sqlMap.case.query,function(err,vals,fields){
    console.log(vals)
    res.json({
      data: vals,
	  code:200
    })
  });
})
//查询详情
router.get('/query/info', async (req, res, next) => {
	let query_id = req.query.id
	let data ={}
	let queryData = sqlMap.case.queryInfo+query_id
	let list = await query(sqlMap.case.query+'WHERE case_id='+query_id)
		//列表
		  data=JSON.stringify(list) //去掉RowDataPacket
		  data=JSON.parse(data)  //转json
	let info = await query(queryData)
	let v =JSON.stringify(info)
		v =JSON.parse(v)
		data[0].info = v
	    res.json({
	        code: 200,
	        msg: '请求成功',
	        data: data
	    })
	// query(sqlMap.case.query+'WHERE case_id='+query_id,function(err,vals,fields){
	// 	//列表
	//   data=JSON.stringify(vals) //去掉RowDataPacket
	//   data=JSON.parse(data)  //转json
	// 	query(queryData,function(err2,vals2,fields2){
	// 	  // 详情
	// 	  let v =JSON.stringify(vals2)
	// 		  v =JSON.parse(v)
	// 		data[0].info = v
	// 		res.json({
	// 		  data:data,
	// 		  code:200
	// 		})
	// 	});
	// });
	
	
})
//查询评论回复
router.get('/query/info/comment', async (req, res, next) => {
	let case_id = req.query.id
	let data ={}
	let sql = "SELECT * FROM `comment` WHERE `comment`.case_id ="+case_id
	let list = await query(sql)
		//评论列表
		  data=JSON.stringify(list) //去掉RowDataPacket
		  data=JSON.parse(data)  //转json
	// let info = await query(queryData)
	// let v =JSON.stringify(info)
	// 	v =JSON.parse(v)
	// 	data[0].info = v
	    res.json({
	        code: 200,
	        msg: '请求成功',
	        data: data
	    })

})

module.exports = router ; 
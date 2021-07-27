
const mysql = require('mysql')
const config = require('../db')

const pool = mysql.createPool({
    host: config.mysqlConfig.host,
    user: config.mysqlConfig.user,
    password: config.mysqlConfig.password,
    database: config.mysqlConfig.database,
    port: config.mysqlConfig.port,
	timezone:config.mysqlConfig.timezone,//时区
    multipleStatements: true    // 多语句查询
  });
// const query = (sql,options,callback) => {
//     pool.getConnection((err, connection)=>{
//         if (err){
//             throw err; //链接不成功！
//         }
//         connection.query(sql,options,(err,results,fields) =>{  
//             //释放连接  
//             connection.release(); 
//             if (err) throw err;
//             //事件驱动回调  
//             callback(err,results,fields);  
//         });  
//       })
//   }
let query = function( sql, values ) {
  // 返回一个 Promise
  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows) => {

          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          // 结束会话
          connection.release()
        })
      }
    })
  })
}
module.exports = query

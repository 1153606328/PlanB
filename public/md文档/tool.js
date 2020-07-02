//tools
//获取时间
get_time =(list)=>{
    //list:时间戳
    let date = list?new Date(parseInt(list)):new Date() //转换时间戳or获取当前时间
    let time ={} 
        time.Y = date.getFullYear()
        time.M = date.getMonth()+1
        time.D = date.getDate()
        time.week = date.getDay() // 星期
        time.h = date.getHours()
        time.m = date.getMinutes()
        time.s = date.getSeconds()
        time.list = date.getTime() //获取时间戳
    return time
}
//判断手机号
isMobilePhone = (phone) => {
    let reg = /^1\d{10}$/;
    if (reg.test(phone)) {
        return true
    } else {
        return false
    }
}
/////字符串方法
//首字母大写
capital  = (str)=>{
    let a = str.trim().replace(/\s/g,'')//去除首尾空格、去除所有空格
        a = a.charAt().toUpperCase()+a.slice(1)//首字母大写、拼接
    return a 
}
numAdd = (num1,num2) =>{
    let baseNum1 = parseFloat(num1.toString())
    let baseNum2 = parseFloat(num2.toString())
    let numAdd =baseNum1+baseNum2 
    return numAdd
}
numReduce = (num1,num2) =>{
    let baseNum1 = parseFloat(num1.toString())
    let baseNum2 = parseFloat(num2.toString())
    let numAdd =baseNum1-baseNum2 
    return numAdd
}

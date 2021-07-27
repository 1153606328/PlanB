const sqlMap = {
    message: {
        add: 'insert into message_list?',
        query: 'SELECT * FROM `message_list`',
        del: 'delete from axios_demo where stu_Id = ?',
        update: 'update axios_demo set stu_name = ?,stu_sex = ?,stu_college = ?,stu_class = ? where stu_Id = ?'
    },
	case:{
		query: 'SELECT * FROM `case_list`',
		queryInfo: 'SELECT * FROM case_info WHERE case_id = ',
	}
}
module.exports = sqlMap
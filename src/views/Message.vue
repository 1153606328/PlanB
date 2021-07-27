<template>
	<div class="message">
		<div class="message_field">
			<van-field
			  v-model="message"
			  rows="1"
			  show-word-limit
			  maxlength="50"
			  autosize
			  label="留言"
			  type="textarea"
			  placeholder="请输入留言"
			/>
			<div class="field_btn" @click="field_btn()">
				发布
			</div>
		</div>
		<div class="message_list" v-for="(item,index) in msg_list" :key="index">
			<div class="flex">
				<div class="msg_list_l">
					<van-image
					  round
					  class="user_img"
					  src="https://img.yzcdn.cn/vant/cat.jpeg"
					/>
				</div>
				<div class="msg_list_r">
					<p>{{item.user_name}}</p>
					<p class="text text_over mb10">{{item.decs}}</p>
					<div class="text_foot">
						<p class="time">{{item.time}}</p>
						<p class="time">点赞</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "message",
	components: {},
	data() {
	  return {
		  message:"",//输入的留言
		  msg_list:"",//留言列表
		  datetime:"",//当前时间
	}
	},
	mounted() {
		this.query()
	},
	methods:{
		query() {//获取
		  this.$http.get('/msg/query').then((res) => {
			if(res.code==200){
				this.msg_list =res.data
			}
		  });
		},
		add() {//添加
			let data = {
				user_name:"游客",
				decs:this.message,
				time:this.datetime
			}
		  // this.$http.get('/msg/add?id=""&user_name="用户11"&decs='+this.message+"&time=''").then((res) => {
		this.$http.post('/msg/add',data).then((res) => {
			if(res.code==200){
				this.msg_list =res.data
			}
		  });
		},
		field_btn(){
			if(this.message!=""){
				let datetime = new Date
				let year = datetime.getFullYear();
				let month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
				let date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
				this.datetime = year+'-'+month+'-'+date
				this.add()
			}
		}
		
	}
}
</script>

<style lang="less" scoped="">
.message_field{
	margin-top: 15px;
	margin-bottom: 15px;
	.field_btn{
		width: 200px;
		padding: 15px 20px;
		background: #596E79;
		border-radius: 20px;
		margin: 10px auto;
		color: #fff;
	}
}
.message_list{
	background: #fff;
	padding: 15px;
	margin-bottom: 10px;
	.user_img{
		width: 50px;
		height: 50px;
	}
	.flex{
		display: flex;
		align-items: center;
	}
	.msg_list_r{
		padding-left: 15px;
		width: 100%;
		text-align: left;
	}
	.text_foot{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
</style>

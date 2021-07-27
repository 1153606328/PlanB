<template>
  <div class="Login">
	<div class="login_box">
		<div class="">
			
		</div>
		<div class="login_input_box">
			<van-field v-model="phone" label="账号" placeholder="请输入账号/手机号" />
			<van-field v-model="PassWord" label="密码" placeholder="请输入密码" />
		</div>
		<div class="btn_box">
			<van-button size="large" color="#596E79">登录</van-button>
		</div>
	</div>
  </div>
</template>

<script>

export default {
  name: "Login",
  components: {},
  data() {
    return {
		phone:"",
		PassWord:"",//密码
    };
  },
  methods: {
   
  },
};
</script>
<style lang="less" scoped>
	.login_box{
		margin-top: 50px;
		.login_input_box{
			margin: 10px;
			border-radius: 10px;
			padding: 5px;
			background: #fff;;
		}
	}
	.btn_box{
		width: 200px;
		margin: 10px auto;
	}
</style>
<template>
	<div class="index">
		<div class="banner">
			<div class="banner_bg">
				<img src="../assets/alogo_bg.png" width="90%">
			</div>
			<div class="banner_text">
				<!-- 一句很长的描述 -->
			</div>
		</div>
		<div class="user">
			<div class="user_left">
				<img src="../assets/logo.png" class="user_img">
				<p>可惜我是巨蟹座</p>
				<p>记录平时遇到的技术问题和学习到的新知识。</p>
			</div>
			<div class="user_right">
				<div class="">
					<div class="table" style="width:100%;">
						和谐
					</div>
					<div class="table" style="width:50%;">
						自由
					</div>
					<div class="table" style="width:75%;">
						民主
					</div>
					<div class="table" style="width:25%;">
						富强
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="coneter">
			<div class="coneter_text">
				<p class="coneter_text_title">设计</p>
				<p>丰富的css动效</p>
			</div>
			<div class="coneter_text">
				<p class="coneter_text_title">服务范围</p>
				<p>个人/企业应用开发</p>
			</div>
			<div class="coneter_text">
				<p class="coneter_text_title">案例展示</p>
				<p>优质案例展示</p>
			</div>
		</div> -->
		
	</div>
</template>

<script>
	export default {
		name: "index",
		data() {
		  return {
		  };
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped >
.banner{
	background: #2c2e3a;
	.banner_bg{
		
	}
	.banner_text{
		padding: 30px;
		color:#9feaf9;
		font-size: 16px;
	}
}
.user{
	display: flex;
	padding: 10px;
	.user_left{
		width: 40%;
		background: #fff;
		padding: 10px;
		border-radius: 15px;
		margin-right: 10px;
		.user_img{
			width: 50px;
			height: 50px;
		}
	}
	.user_right{
		width: 60%;
		background: #fff;
		padding: 10px;
		border-radius: 15px;
		.table{
			background: #596E79;
			color: #fff;
			height: 20px;
			margin-bottom: 5px;
			border-radius: 15px;
		}
	}
}
.coneter{
	display: flex;
	align-content: center;
	justify-content: center;
	padding: 20px;
	background: #fff;
	.coneter_text{
		padding: 10px;
		width: 200px;
		.coneter_text_title{
			margin-bottom: 10px;
			font-size:16px;
		}
	}
}
</style>

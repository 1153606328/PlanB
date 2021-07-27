<template>
	<div class="CaseInfo">
		<!-- <van-empty description="此功能正在努力开发中~" /> -->
		<div class="banner" :style="{backgroundImage: 'url(' + data.img + ')'}">
		</div>
		
		<div class="title">
			<div class="title_left">
			</div>
			<div class="title_right">
				{{data.title}}
			</div>
		</div>
		<!-- 简述 -->
		<div class="cont">
			<p>{{data.sketch}}</p>
		</div>
		<div class="tag_box mb10">
			<div class="tag">
				{{data.type}}
			</div>
		</div>
		<!-- 作者信息 -->
		<!-- <div class="user_info">
				<van-image
				  round
				  width="50px"
				  height="50px"
				  src="https://img.yzcdn.cn/vant/cat.jpeg"
				/>
			<div class="right ml10">
				<p>{{data.user_name}}</p>
				<p>{{data.user_motto}}</p>
			</div>
		</div> -->
		<div v-for="(item,index) in data.info" :key="index">
			<div class="title">
				<div class="title_left">
				</div>
				<div class="title_right">
					{{item.model_name}}
				</div>
			</div>
			<div class="cont">
				<p>{{item.content}}</p>
			</div>
		</div>
		
		<div class="title">
			<div class="title_left">
			</div>
			<div class="title_right">
				评论区
			</div>
		</div>
		<div class="cont">
			<van-skeleton title avatar :row="3" />
		</div>
	</div>
</template>

<script>
	export default {
		name: "CaseInfo",
		data() {
			return {
				data: [],
				
			}
		},
		mounted() { //渲染完成后
			this.data = this.$route.query.data;
			console.log(this.data);
			this.getCaseInfo()//详情
			this.getCaseComment()//评论
		},
		methods: {
			getCaseInfo() {//获取作品详情
				  this.$http.get('/case/query/info?id=0').then((res) => {
				    if (res.code == 200) {
						this.data = res.data[0]
				    }
				  });
				},
			getCaseComment() {//获取作品评论回复
				  this.$http.get('/case/query/info/comment?id=0').then((res) => {
				  //   if (res.code == 200) {
						// this.data = res.data[0]
				  //   }
				  });
				},
		}
	}
</script>

<style lang="less" scoped>
	@import "../../style/base.less";

	.banner {
		width: 100%;
		min-height: 200px;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.title {
		font-size: 16px;
		text-align: left;
		padding: 10px 15px;
		background: #fff;
		margin-bottom: 10px;
		display: flex;
		align-items: center;
		.title_left{
			width: 4px;
			height: 16px;
			background: @baseColor;
			margin-right: 5px;
		}
	}
	//用户信息
	.user_info{
		display: flex;
		align-items: center;
		margin: 0 15px;
		background: #fff;
		padding: 10px;
		border-radius: 10px;
		margin-bottom: 10px;
		.right{
			text-align: left;
		}
	}
	.tag_box {
		display: flex;
		align-items: center;

		.tag {
			padding: 5px 10px;
			font-size: 12px;
			text-align: center;
			background: @baseColor;
			color: @fontColor;
			border-radius: 15px;
			margin-left: 10px;
		}
	}

	.cont {
		padding: 10px 15px;
		text-align: left;
		background: #fff;
		margin: 10px 15px;
		border-radius: 10px;
	}
</style>

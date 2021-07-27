<template>
	<div class="index">
		<!-- 猜你喜欢 -->
		<div class="banner_box">
			<van-swipe :autoplay="3000" lazy-render>
			  <van-swipe-item v-for="item in banner_list" :key="item.id">
				<div class="banner" :style="{backgroundImage: 'url(' + item.img + ')'}">
				</div>
			  </van-swipe-item>
			</van-swipe>
		</div>
		<div class="conneter_box" >
			<!-- 全部作品 -->
			<div class="case_box">
				<div class="Title">
					<p>最新作品</p>
					<van-icon name="weapp-nav" size="18" @click = "toLink('/case')"/>
				</div>
				<div class="case">
					<div class="case_list" v-for="item in case_list" :key="item.id" @click = "toLink('/case_info',item)">
						<div class="images" 
						:style="{backgroundImage: 'url(' + item.img + ')'}"
						>
						</div>
						<div class="conneter">
							<p class="fs14">{{item.title}}</p>
							<p class="mb5 mt5">{{item.time}}</p>
							<p class="text_over">{{item.sketch}}</p>
						</div>
					</div>
				</div>
			</div>
			<!-- 最近碎语 -->
			<div class="essay_box">
				<div class="Title">
					<p>最近动态</p>
					<!-- <van-icon name="weapp-nav" size="18"/> -->
				</div>
				<div class="essay">
					<div class="essay_card" v-for="item in essay_list" :key="item.id">
						<div class="flex e_card_title mb10">
							<div class="e_left flex">
								<van-image
								  round
								  width="50px"
								  height="50px"
								  src="https://img.yzcdn.cn/vant/cat.jpeg"
								/>
								<div class="ml15">
									<p>{{item.userName}}</p>
									<p>{{item.label}}</p>
								</div>
							</div>
							<div class="e_right">
								<van-icon name="weapp-nav" size="18"/>
							</div>
						</div>
						<div class="e_card_text text_over mb10">
							{{item.text}}
						</div>
						<div class="e_card_img">
							
						</div>
						<div class="e_card_foot flex">
							<div class="foot_btn flex">
								<van-icon name="like" size="18"/>
								<span class="ml5">喜欢</span>
							</div>
							<div class="foot_btn flex">
								<van-icon name="chat" size="18"/>
								<span class="ml5">评论</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "index",
		data() {
		  return {
			  banner_list:[
				   {id:0,img:'http://qny.panhuaqing.cn/IMG_1.jpg'},
				   {id:1,img:'http://qny.panhuaqing.cn/IMG_2.jpg'},
			  ],
			  case_list:[//作品列表
			  ],
			  case_id:100,//被点击的作品-放大图片
			  essay_list:[//最近动态
				  {id:0,userName:"planB",label:"前端工程师",text:"开始搭建自己的个人博客,用于记录开发过程中遇到的问题"},
				  {id:1,userName:"planB",label:"前端工程师",text:"一条测试记录"}
			  ]
			  
		  };
		},
		mounted() {
			this.getCaseList();
		},
		methods:{
			toLink(url,data){//跳转
				this.$router.push({path:url,query:{data:data}});
				// this.$router.push({name:url,params:{data:data}});
			},
			images_big(id){
				this.case_id = id
			},
			getCaseList() {//获取作品列表
			  this.$http.get('/case/query').then((res) => {
			    if (res.code == 200) {
					this.case_list = res.data
			    }
			  });
			},
		}
	}
</script>

<style lang="less" scoped >
@import "../style/base.less";
.Title{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	font-size: 14px;
}
.banner_box{
	.banner{
		width: 100%;
		// min-height: 200px;
		background-repeat: no-repeat;
		background-size: 100%;
	}
}
.conneter_box{
	display: flex;
	flex-wrap: wrap;
	background: @bgColor;
	padding-bottom: 20px;
}
.case{
	margin: 0 15px;
	margin-bottom: 10px;
	.case_list{
		background: #fff;
		border-radius: 10px;
		padding: 15px;
		margin-bottom: 10px;
		.images{
			width: 100%;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			margin-bottom: 10px;
			min-height: 220px;
			// transition: background-size 1s;//过渡动画
		}
		// .images_big{
		// 	background-size: 120%;
		// }
		.conneter{
			text-align: left;
		}
	}
}
.essay{//最近动态、文章
	margin: 0 15px;
	.flex{
		display: flex;
		align-items: center;
	}
	.essay_card{
		background: #fff;
		padding: 15px;
		border-radius: 10px;
		margin-bottom: 10px;
		.e_card_title{
			justify-content: space-between;
			text-align: left;
		}
		.e_card_text{
			text-align: left;
		}
		.e_card_foot{
			justify-content: flex-end;
			.foot_btn{
				padding: 5px 15px;
				margin-right: 10px;
				border-radius: 15px;
				color: @fontColor;
				background: @baseColor;
			}
		}
	}
}
@media (min-width:1440px){//屏幕大于1440
	.case_box{
		width: 65%;
	}
	.essay_box{
		width: 35%;
	}
	.banner{
		min-height: 600px;
	}
}
@media (max-width:1439px){//屏幕小于1440
	.case_box{
		width: 100%;
	}
	.essay_box{
		width: 100%;
	}
	.banner{
		min-height: 200px;
	}
}
</style>

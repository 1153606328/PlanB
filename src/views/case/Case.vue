<template>
  <div class="Case">
	  <div class="tab_box">
	  	<div :class="tabs_on === item.id?'tabs_on tabs':' tabs'" 
		@click="changeTab(item.id)"
		v-for="item in tabs" :key = "item.id"
		>
	  		{{item.name}}
	  	</div>
	  </div>
	  <div class="case_box">
	  	<!-- <div class="case_list" v-for="item in case_list" :key = "item.id" >
			
			<div class="list_img" style=""></div>
			<div class="case_l_conneter">
				<div style="width: 75%;">
					<div class="list_title">{{item.title}}</div>
					<div class="list_text">{{item.text}}</div>
				</div>
				
			</div>
		</div> -->
		<div class="case_list" v-for="item in case_list" :key="item.id">
			<div class="images" :style="{backgroundImage: 'url(' + item.img + ')'}">
			</div>
			<div class="conneter" @click = "toLink('/case_info')">
				<p class="fs14">{{item.title}}</p>
				<p class="mb5 mt5">{{item.time}}</p>
				<p class="text_over">{{item.text}}</p>
			</div>
		</div>
	  </div>
  </div>
</template>

<script>
export default {
    name:"Case",
    data(){
        return{
			tabs:[{id:0,name:'全部'},{id:1,name:'app'},{id:2,name:'小程序'},{id:3,name:'H5网站'}],//tab选项卡
			tabs_on:0,//选中的tab
            case_list:[//作品列表
            				  {img:"https://img.yzcdn.cn/vant/cat.jpeg",to:'url',id:0,type:"uni-app",time:"2021-6",title:'质安油服',text:'一站式的油电气智慧运维解决平台,"互联网+线下运维服务"模式，提供报修、审批、计费、施工手续办理、人脸验证、实时监控、验收等线上办理，节约成本，提高效率',},
            				  {img:"https://img.yzcdn.cn/vant/cat.jpeg",time:"2020",title:'农资商城',text:'农产品交易平台',to:'url',id:1,type:"web"},
            				  {img:"https://img.yzcdn.cn/vant/cat.jpeg",time:"2018",title:'皮皮二手车',text:'二手车交易平台',to:'url',id:2,type:"web"},
            ],
			
        }
    },
	methods:{
		changeTab(id){//tab点击事件
			this.tabs_on = id
		},
		toLink(url){//跳转
			this.$router.push(url);
		}
	}
}
</script>

<style lang="less" scoped>
@import  "../../style/base.less";
// @import "../../style/base.less";
//tab选项卡
.Case{
	width: 100%;
}
.tab_box{
	display: flex;
	padding: 10px 15px;
	.tabs{
		padding: 5px 20px;
	}
	.tabs_on{
		background: #13DF81;
		color:#fff;
		border-radius: 15px;
	}
}
.case_box{
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	padding: 10px 15px;
	.case_list{
		background: #fff;
		border-radius: 10px;
		padding: 15px;
		margin-bottom: 10px;
		.images{
			width: 100%;
			background-size: 100%;
			// background: url(../assets/banner/banner2.jpg);
			background-repeat: no-repeat;
			background-position: center;
			margin-bottom: 10px;
			min-height: 220px;
		}
		.conneter{
			text-align: left;
		}
	}
	@media (max-width:767px){//屏幕小于768px ipad
		.case_list{
			width:340px;
			.list_img{
				height: 175px;
			}
		}
	}
	@media (min-width:768px)and(max-width:1023px){// 768<屏幕<1200之间
		.case_list{
			width:220px;
			.list_img{
				height: 175px;
			}
		}
	}
	@media (min-width:1024px)and(max-width:1440px){// 1200<屏幕<1440之间
		.case_list{
			width:290px;
			.list_img{
				height: 175px;
			}
		}
	}
	@media (min-width:1441px){//屏幕大于1440
		.case_list{
			width:335px;
			.list_img{
				height: 175px;
			}
		}
	}
}
</style>
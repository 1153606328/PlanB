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
	  	<div class="case_list" v-for="item in case_list" :key = "item.id" >
			<!-- <img src="../assets/banner/banner2.jpg" > -->
			<div class="list_img" style=""></div>
			<div class="case_l_conneter">
				<div style="width: 75%;">
					<div class="list_title">{{item.title}}</div>
					<div class="list_text">{{item.text}}</div>
				</div>
				<van-icon name="more" color="#13DF81" size="20"/>
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
			tabs:[{id:0,name:'全部'},{id:1,name:'app'},{id:2,name:'小程序'},{id:3,name:'网站'}],//tab选项卡
			tabs_on:0,//选中的tab
            case_list:[
				{img:"../assets/banner/banner2.jpg",title:'质安油服',text:'加油站维修服务平台加油站维修服务平台加油站维修服务平台加油站维修服务平台加油站维修服务平台加油站维修服务平台',to:'url',id:0,type:"uni-app"},
				{img:"../assets/logo.png",title:'农资商城',text:'农产品交易平台',to:'url',id:1,type:"web"},
				{img:"../assets/logo.png",title:'皮皮二手车',text:'二手车交易平台',to:'url',id:2,type:"web"},
			]
			
        }
    },
	methods:{
		changeTab(id){//tab点击事件
			this.tabs_on = id
		}
	}
}
</script>

<style lang="less" scoped>
//tab选项卡
.Case{
	width: 100%;
	height: 100%;
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
		padding: 10px;
		background: #fff;
		border-radius: 10px;
		margin-bottom: 10px;
		.list_img{
			width: 100%;
			background-size: 100%;
			background: url(../assets/banner/banner2.jpg);
			background-repeat: no-repeat;
			background-position: center;
			margin-bottom: 10px;
		}
		.case_l_conneter{
			display: flex;
			align-items: center;
			justify-content: space-between;
			text-align: left;
			.list_title{
				font-size: 14px;
				margin-bottom: 5px;
			}
			.list_text{
				display: -webkit-box;
				overflow: hidden;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
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
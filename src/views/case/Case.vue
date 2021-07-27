<template>
  <div class="Case">
	  <div class="tab_bg">
		  <div class="tab_box">
	  	<div :class="tabs_on === index?'tabs_on tabs':' tabs'" 
		@click="changeTab(index)"
		v-for="(item,index) in tabs" :key = "index"
		>
	  		{{item.name}}
	  	</div>
	  </div>
	  <div class="tab_box mt5">
	  	<div :class="tabs_on2 === index?'tabs_on tabs':' tabs'" 
		@click="changeTab2(index)"
		v-for="(item,index) in tabs[tabs_on].children" :key = "index"
		>
	  		{{item.name}}
	  	</div>
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
			<div class="conneter" @click = "toLink('/case_info',item)">
				<p class="fs14">{{item.title}}</p>
				<p class="mb5 mt5">{{item.time}}</p>
				<p class="text_over">{{item.sketch}}</p>
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
			//tab选项卡
			tabs:[
				{
					id:1,name:'开发案例',
					children:[
						{name:"app"},
						{name:"小程序"},
						{name:"H5"}
					]
				},
				{
					id:2,name:'日志',
						children:[
							{name:"开发笔记"},
							{name:"游记"},
						]
				},
				],
				
			tabs_on:0,//选中的tab
			tabs_on2:0,//选中的子分类
            case_list:[//作品列表
            ],
			
        }
    },
	mounted() {
		this.getCaseList();
	},
	methods:{
		changeTab(id){//tab点击事件
			this.tabs_on = id
			this.tabs_on2 = 0
			this.search(id)//搜索
		},
		changeTab2(id){//tab点击事件
			this.tabs_on2 = id
			// this.search(id)//搜索
		},
		toLink(url,data){//跳转
			this.$router.push({path:url,query:{data:data}});
			// this.$router.push({name:url,params:{data:data}});
		}, 
		//搜索作品
		search(val){
			this.$http.get('/case/query?type='+val).then((res) => {
			  if (res.code == 200) {
					this.case_list = res.data
			  }
			});
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

<style lang="less" scoped>
@import  "../../style/base.less";
// @import "../../style/base.less";
//tab选项卡
.Case{
	width: 100%;

}
.tab_bg{
	background: #fff;
	margin: 10px;
    border-radius: 10px;
	padding: 10px;
}
.tab_box{
	display: flex;
	// padding: 10px 15px;
	.tabs{
		padding: 5px 10px;
	}
	.tabs_on{
		background: @baseColor;
		color:@fontColor;
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
			background-size: cover;
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
<template>
  <div class="Navbar">
	  <!-- pc端 -->
	<div class="top-box" v-if="screenWidth>1024">
	  <img src="../../assets/logo.png" alt="图标" class="top-left">
	  <div class="top-right">
	    <div  v-for="item in tab_list" :key="item.id"
		:class="tab===item.id?'top-right-tab on':'top-right-tab'"
		@click="onTab(item)"
		>
		{{item.name}}
		</div>
		<div class="topic">
			<p>切换主题:</p>
			<van-switch v-model="checked" size="18"  @change ="changeTheme"/>
		</div>
	  </div>
	</div>
	
	<!-- 移动端 -->
	<van-nav-bar :title="title" :left-arrow="isleftarrow" @click-left="goBack" v-else>
	  <template #right>
	    <van-icon name="wap-nav" size="18" class="nav_icon" @click="onMoreIcon"/>
	  </template>
	</van-nav-bar>
	
	<!-- 弹出层 -->
	<van-popup v-model="show" position="left" class="popupStyle">
		<van-image
		  round
		  class="img_box"
		  width="120px"
		  height="120px"
		  src="https://img.yzcdn.cn/vant/cat.jpeg"
		/>
		<div class="pop_user_name">
			用户名称
		</div>
		<div class="pop_conneter">
			<div class="pop_cell" v-for="item in tab_list" :key="item.id" @click="onTab(item)">
				<van-icon :name="item.icon" size="18"/>
				<p class="pop_text">{{item.name}}</p>
			</div>
			<div class="topic">
				<p>浅色模式:</p>
				<van-switch v-model="checked" size="18"  @change ="changeTheme"/>
			</div>
		</div>
		
	</van-popup>
  </div>
</template>

<script>
export default {
	props:["title","isleftarrow"],//动态接收：标题，返回按钮
  data() {
    return {
		tab_list:[
			{name:"首页",id:0,url:"/",icon:"wap-home"},
			{name:"作品",id:1,url:"/case",icon:"point-gift"},
			{name:"日志",id:2,url:"/logs",icon:"graphic"},
			{name:"留言",id:3,url:"/message",icon:"smile-comment"},
			{name:"登录",id:4,url:"/login",icon:"smile-comment"},
			
			],
		tab:0,
		// nav_title:"首页",//标题
		screenWidth: document.body.clientWidth,//屏幕宽度
		show:false,//弹出层
		checked:false,//主题按钮
		// isleftarrow:false,//nav返回按钮
    };
  },
  mounted () {
      const that = this
      window.onresize = () => {
          return (() => {
              window.screenWidth = document.body.clientWidth
              that.screenWidth = window.screenWidth
          })()
      }
  },
  watch:{
      screenWidth(val){//监听屏幕宽度
          // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
          if(!this.timer){
              // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
              this.screenWidth = val
              this.timer = true
              let that = this
              setTimeout(function(){
                  // 打印screenWidth变化的值
                  console.log(that.screenWidth)
                  that.timer = false
              },400)
          }
      }
  },
  methods: {
    onTab(item) {//点击tab选项
		this.tab = item.id // 修改tab
		// this.nav_title = item.name // 设置标题
		this.show = false // 关闭弹窗

		if(item.url!=this.$route.path){
			this.$router.push(item.url); // 跳转
		}
		
    },
	toLink(url){//跳转
		this.$router.push(url);
	},
    goBack() {//后退
		history.back()
    },
	onMoreIcon(){//点击更多图标
		this.show = true
	},
	changeTheme(e){//切换主题
		console.log(e);
		if(e){
			document.getElementById('app').className = "light-theme"
		}else{
			document.getElementById('app').className = "dark-theme"
		}
	}
  }
};
</script>

<style lang="less" scoped>
@import "../../style/base.less";
.Navbar{
	.top-box {//顶部导航容器
	  display: flex;
	  justify-content: space-between;
	  align-content: center;
	  background: @baseColor;
	  padding: 10px;
	   .top-left{
	     width: 30px;
	     margin-left: 20px;
	   }
	  .top-right {
	    display: flex;
	    align-content: center;
	    .top-right-tab{
	      padding: 5px 10px;
	      color: @fontColor;
		  font-size: 12px;
		 
	    }
	    .on{
	      border-bottom: 2px solid;
	    }
	  }
	  .topic{
		  display: flex;
		  align-items: center;
		  justify-content: space-between;
		  padding: 5px 10px;
		  color: @fontColor;
		  p{
			  margin-right: 10px;
		  }
	  }
	}
	.van-nav-bar{//nav颜色样式
		background-color: @baseColor;
		.nav_icon{
			color: @fontColor;
		}
	}
	/deep/ .van-ellipsis{color: @fontColor!important;}//nav标题颜色
	/deep/ .van-icon-arrow-left{color: @fontColor!important;}//nav标题颜色
	.popupStyle{//弹出层样式
		width:256px;
		height: 100%;
		background: @baseColor;
		.img_box{
			margin-top: 30px;
			margin-bottom: 15px;
		}
		.pop_user_name{
			text-align: center;
			line-height: 16px;
			font-size: 16px;
			color: @fontColor;
			margin-bottom: 30px;
		}
		.pop_conneter{
			background: @fzColor;
			// height: 100%;
			border-radius: 20px 20px 0  0;
			padding-top: 20px;
			padding-bottom: 10px;
			color: @fontColor;
			.pop_cell{
				display: flex;
				// justify-content: center;
				align-items: center;
				padding: 5px 20px;
				margin-bottom: 15px;
			}
			.pop_text{
				margin-left: 20px;
				line-height: 16px;
				font-size: 16px;
			}
			.topic{//主题按钮
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 5px 10px;
			}
		}
	}
}
</style>

<template>
  <div class="Navbar">
	<div class="top-box">
	  <img src="../../assets/logo.png" alt="图标" class="top-left">
	  <div class="top-right">
	    <div  v-for="item in tab_list" :key="item.id"
		:class="tab===item.id?'top-right-tab on':'top-right-tab'"
		@click="onTab(item.id)"
		>
		{{item.name}}
		</div>
	  </div>
	</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
		tab_list:[{name:"首页",id:0},{name:"案例",id:1},{name:"文章",id:2}],
		tab:0,
    };
  },
  methods: {
    onTab(id) {//点击tab选项
		this.tab=id
    },
    onSelect() {
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
	      color: #fff;
	    }
	    .on{
	      border-bottom: 2px solid;
	    }
	  }
	}
}
</style>

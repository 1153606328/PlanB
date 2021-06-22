<template>
  <div id="app" class="dark-theme">
    <NavBar v-show="navShow" :title="title" :isleftarrow="isleftarrow"></NavBar>
    <router-view />
	<div class="foot">桂ICP备2020009713号</div>
  </div>
</template>
<script>
import NavBar from "./components/common/NavBar.vue";
export default {
  components: {
    NavBar
  },
  data() {
    return {
      title:'',
      isleftarrow:'',
      transitionName: "fade",
      navShow: true
    };
  },
  mounted() {//渲染完成后赋值title
    this.title = this.$route.meta.title;
    this.isleftarrow = this.$route.meta.isleftarrow;       
  },
  watch: {//路由变化时动态更新
    $route(to, from) {
      this.title = to.meta.title;
      this.isleftarrow =  to.meta.isleftarrow;
     }
  }
}
</script>
<style lang="less">
@import "./style/index.less";
html{height: 100%;}
body{
height:100%;
width: 100%;
margin:0;
padding:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: @bgColor;
  width: 100%;
  min-height: 100%;
  position: relative;
}
p{margin: 0;}
.foot{
	    position: absolute;
	    bottom: 0;
		background-color: @bgColor;
	    width: 100%;
}
</style>

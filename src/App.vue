<template>
  <div id="app">
    <NavBar v-show="navShow" :title="title" :isleftarrow="isleftarrow"></NavBar>
    <router-view/>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.van-nav-bar{
    background: @baseColor!important;
    .van-nav-bar__title{
        color: #fff!important;
    }
}
</style>

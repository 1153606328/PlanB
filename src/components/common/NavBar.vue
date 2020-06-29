<template>
  <div class="Navbar">
     <van-nav-bar :fixed="true" :placeholder="true" :title="title"  :left-arrow="isleftarrow" @click-left="onClickLeft" />
  </div>
</template>

<script>
export default {
  // title：用来显示导航栏的title，isleftarrow用来显示导航栏的左侧返回箭头
  props: ["title","isleftarrow"],
  methods: {
    onClickLeft() {
      // 点击回退的时候当做地址回退
      this.$router.go(-1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.van-nav-bar{
  .van-icon{
  color: #fff!important;
}
} 
</style>

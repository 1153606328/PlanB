<template>
  <div id="app">
    <van-nav-bar title="标题"  :fixed="true"  :placeholder="true" />
    <router-view/>
  </div>
</template>

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

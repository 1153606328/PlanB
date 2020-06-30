<template>
  <div class="Navbar">
    <van-nav-bar
      :fixed="true"
      :placeholder="true"
      :title="title"
      right-text="分享"
      :left-arrow="isleftarrow"
      @click-left="onClickLeft"
      @click-right="showShare = true"
    >
    <van-icon name="share" slot="right" />
    </van-nav-bar>
    <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
  </div>
</template>

<script>
export default {
  // title：用来显示导航栏的title，isleftarrow用来显示导航栏的左侧返回箭头
  props: ["title", "isleftarrow"],
  data() {
    return {
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" }
      ]
    };
  },
  methods: {
    onClickLeft() {
      // 点击回退的时候当做地址回退
      let path = this.$route.path;
      if (path != "/") {
        this.$router.go(-1);
      }
    },
    onSelect(option) {
      this.$toast(option.name);
      this.showShare = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.van-nav-bar {
  z-index: 10!important;
  .van-icon {
    color: #fff !important;
  }
}
.van-share-sheet{
  z-index: 10000!important;
}
</style>

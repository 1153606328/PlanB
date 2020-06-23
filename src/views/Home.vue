<template>
  <div class="home">
    <!--轮播-->
    <div class="banner">
      <van-swipe :autoplay="3000" height="200">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  // components: {
  //   HelloWorld
  // },
  data() {
    return {
       images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
    };
  },
  methods: {
    // getfun() {
    //   this.$http.get(this.$api.userinfo,).then(result => {
    //     // 此处为获取数据后需要执行的代码，比如格式化数据、渲染数据列表等
    //     console.log('666')
    //   });
    // },
    // geteasy() {
    //   this.$http.get('https://www.easy-mock.com/mock/5d14342427a7e80b4b3451f1/easy/userinfo',).then(result => {
    //     // 此处为获取数据后需要执行的代码，比如格式化数据、渲染数据列表等
    //     console.log('666')
    //   });
    // }
  }
};
</script>
<style lang="less" scoped>
.banner{
  img{width:100%;}
}
</style>
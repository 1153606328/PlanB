<template>
  <div class="home">
    <!--轮播图-->
    <van-search v-model="searchValue" placeholder="请输入搜索关键词" />
    <div class="banner">
      <van-swipe :autoplay="3000" height="200">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="footer" :style="footWidth">
      <div class="footer-box">
        <van-icon name="bars" class="fs24" @click="changePOP"/>
        <van-icon name="add" class="addicon" v-show="iconVisible"/>
        <!-- <van-icon name="chat-o" badge="9" class="fs18" /> -->
      </div>
    </div>
    <!-- list列表 -->
    <van-list v-model="loading" :finished="finished" @load="onLoad" offset="10" class="listBOX">
      <van-card
        v-for="item in list"
        :key="item.id"
        :desc="item.content"
        :title="item.title"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag color="#f2826a" class="mr5" v-for="i in item.labes" :key="i.leve">{{i.labe}}</van-tag>
        </template>
        <!-- <template #price>
          <div>{{item.city}}</div>
        </template>-->
        <template #num>
          <div>{{item.time}}</div>
        </template>
      </van-card>
    </van-list>
    <!--弹出-->
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }" />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      list: [],
      loading: false,
      finished: false,
      searchValue: "",
      show:false,
      iconVisible:true,
      footWidth:{width:"100%"}
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        this.getList();
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 15) {
          this.finished = true;
        }
      }, 1000);
      console.log("onload");
    },
    getList() {
      this.$http.get(this.$api.home_list).then(res => {
        console.log(res.code);
        if ((res.code == 200) & (res.data.length > 0)) {
          res.data.map((item, index) => {
            console.log(item.id);
            this.list.push(item);
          });
        }
      });
    },
    changePOP(){
      console.log("pop");
      if(this.show == false){
        this.footWidth = {width:"50%"}
        this.iconVisible = false
        this.show = true
      }
      else{
        this.footWidth = {width:"100%"}
        this.iconVisible = true
        this.show = false
      }
    }
  },
  created() {
    // this.getList();
  }
};
</script>
<style lang="less">
.footer {
  // height: 40px;
  // width: 100%;
  transition: width 1s;
  background: #f95a5a;
  position: fixed;
  bottom: 0;
  z-index: 9999;
  border-radius: 0 15px 0 0;
  .footer-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 15px 8px 10px;
  }
  .addicon {
    font-size: 40px;
    position: absolute;
    left: 44%;
    top: -10px;
  }
}
</style>
<template>
  <div class="home">
    <div class="banner">
      <van-swipe :autoplay="3000" height="200">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!--轮播图-->
    <van-search
      v-model="searchValue"
      placeholder="请输入搜索关键词"
      shape="round"
      background="#ffffff00"
    />
    <div class="footer" :style="footWidth">
      <div class="footer-box">
        <van-icon name="bars" class="fs24" @click="changePOP" />
        <van-icon
          name="add"
          class="addicon"
          v-show="iconVisible"
          @click="toRoute('/addplan')"
        />
        <!-- <van-icon name="chat-o" badge="9" class="fs18" /> -->
      </div>
    </div>
    <!-- list列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      @load="onLoad"
      offset="10"
      class="listBOX"
    >
      <van-card
        v-for="item in list"
        :key="item.id"
        :desc="item.content"
        :title="item.title"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag
            color="#f2826a"
            class="mr5"
            v-for="i in item.labes"
            :key="i.leve"
            >{{ i.labe }}</van-tag
          >
        </template>
        <!-- <template #price>
          <div>{{item.city}}</div>
        </template>-->
        <template #num>
          <div>{{ item.time }}</div>
        </template>
      </van-card>
    </van-list>
    <!--弹出-->
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '40%' }"
      @click-overlay="changePOP"
    >
      <van-row>
        <van-col span="6">
          <van-image
            round
            width="2rem"
            height="2rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
        /></van-col>
        <van-col span="18">
          <p>奶茶</p>
          <p>一句话简介</p>
        </van-col>
      </van-row>
      <van-cell-group border>
        <van-cell title="视频" icon="video" value="10" />
        <van-cell title="相片" icon="photo" value="90" />
        <van-cell
          title="地点"
          icon="map-marked"
          value="10"
          is-link
          to="/city"
        />
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/cat.jpeg",
        "https://img.yzcdn.cn/vant/cat.jpeg",
      ],
      list: [],
      loading: false,
      finished: false,
      searchValue: "",
      show: false,
      iconVisible: true,
      footWidth: { width: "100%" },
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
      this.$http.get(this.$api.home_list).then((res) => {
        console.log(res.code);
        if ((res.code == 200) & (res.data.length > 0)) {
          res.data.map((item, index) => {
            console.log(item.id);
            this.list.push(item);
          });
        }
      });
    },
    changePOP() {
      console.log("pop");
      if (this.show == false) {
        this.footWidth = { width: "50%" };
        this.iconVisible = false;
        this.show = true;
      } else {
        this.footWidth = { width: "100%" };
        this.iconVisible = true;
        this.show = false;
      }
    },
    toRoute(path) {
      //跳转
      this.$router.push(path);
    },
  },
  created() {
    // this.getList();
  },
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
  .footer-box {
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
.van-cell-group {
  i {
    font-size: 20px;
  }
}
</style>
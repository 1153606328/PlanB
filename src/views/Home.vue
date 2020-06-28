<template>
  <div class="home">
    <!--轮播图-->
    <van-search v-model="searchValue" placeholder="请输入搜索关键词" />
    <div class="banner">
      <van-swipe :autoplay="3000" height="200">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" width="100%"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- list列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      offset = "10"
      class="listBOX"
    >
      <van-card
       v-for="item in list" :key="item.id"
      
        :desc= item.content
        :title= item.title
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag color="#f2826a" class="mr5" v-for="i in item.labes" :key ="i.leve">{{i.labe}}</van-tag>
        </template>
        <!-- <template #price>
          <div>{{item.city}}</div>
        </template> -->
        <template #num>
          <div>{{item.time}}</div>
        </template>
      </van-card>
    </van-list>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

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
      searchValue:""
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        this.getList()
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 15) {
          this.finished = true;
        }
      }, 1000);
      console.log("onload")
    },
    getList(){
      this.$http.get(this.$api.home_list,).then(res => {
        console.log(res.code);
        if(res.code == 200 &res.data.length>0){
            res.data.map((item,index)=>{
              console.log(item.id)
              this.list.push(item)
            })
        }
      });
    }
  },
  created(){
    this.getList()
  },
};
</script>
<style lang="less">
.mr5 {
  margin-right: 5px;
}
</style>
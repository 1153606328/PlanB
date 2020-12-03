<template>
  <div class="about">
    <!-- <div class="bg">
        <van-sticky>
    <van-row type="flex" justify="space-between">
            <van-col span="6"></van-col>
            <van-col span="4">
                <van-popover  v-model="showPopover" :actions="actions" @select="onSelect" placement="bottom-end" theme="dark">
            <template #reference>    
                <van-icon name="more" class="fs24 mt10" @click="showPopover = true"/>
                </template>
        </van-popover>
            </van-col>
        </van-row>
        </van-sticky>
    </div> -->
        <div>
            <video src="../assets/video.mp4" id="video" loop="loop"  @click="playVideo('video')"></video>
            <div class="videoBtn" @click="playVideo('btn')" v-show="showVideoBtn">
                <van-icon name="play-circle" class="mr5"/> <span>Paly Video</span>
            </div>
        </div>
    <div class="contBox">
      <!--left-->
    <div class="leftBox">
      <div class="headImg">
      <van-image
        round
        width="3rem"
        height="3rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <div>
        <p class="fs18 mb5">可惜我是巨蟹座</p>
        <p>假装这里有一句花里胡哨的个性签名~</p>
      </div>
    </div>
    <div class="infoBox">
      <div class="bgColor">
        <van-divider
        content-position="left"
        :style="{ color: '#8888', borderColor: '#a9a9a9', padding: '0px' }"
        >信息</van-divider
      >
        <div class="infoText mb10">
          <van-icon name="user-o" class="fs18 mr5" />
          <p class="lh18">前端开发工程师</p>
        </div>
        <div class="infoText mb10">
          <van-icon name="phone-o" class="fs18 mr5" />
          <p class="lh18">18776959052</p>
        </div>
        <div class="infoText mb10">
          <van-icon name="envelop-o" class="fs18 mr5" />
          <p class="lh18">1153606328@qq.com</p>
        </div>
        <div class="infoText mb10">
          <van-icon name="location-o" class="fs18 mr5" />
          <p class="lh18">广西南宁</p>
        </div>
        <van-divider
        content-position="left"
        :style="{ color: '#8888', borderColor: '#a9a9a9', padding: '0px' }"
        >技能</van-divider
      >
      <div class="skill">
          <span :class="['table',item.id==skill?'tableActive':'']" v-for="item in skillArr" :key="item.id">{{item.name}}</span>
        </div>
      </div>
      
        
       
        <!-- <van-divider
        content-position="left"
        :style="{ color: '#8888', borderColor: '#a9a9a9', padding: '0px' }"
        >项目</van-divider
      >
      <van-skeleton title avatar  :row="10" /> -->
      </div>
    </div>
<!--right-->
    <div class="rightBox">
       <!-- <van-divider
        content-position="left"
        :style="{ color: '#8888', borderColor: '#a9a9a9', padding: '0px' }"
        >工作经历</van-divider
      >
      <van-skeleton title  :row="3" />
      <div><p>xxx</p></div> -->
        <div class="rightBg">
          <van-tabs type="card" background="#dedede" color="#000000A6" >
            <van-tab v-for="item in tabArr" :title="item.name" :key="item.id" >
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
            </van-tab>
          </van-tabs>
        </div>
    </div>
      <div class="foot">页尾</div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      skillArr: [
        { name: "javascript", id: 0 },
        { name: "html5", id: 1 },
        { name: "css3", id: 2 },
        { name: "less", id: 3 },
        { name: "Vue", id: 4 },
        { name: "React", id: 5 },
        { name: "webpack", id: 6 },
        { name: "git", id: 7 },
        { name: "...", id: 8 },
        { name: "PhotoShop", id: 9 },
      ],
      skill: 0, //当前点亮标签
      showPopover: false,
      // 通过 actions 属性来定义菜单选项
      actions: [{ text: "选项一" }, { text: "选项二" }, { text: "选项三" }],
      showVideoBtn: true, //
      tabArr: [
        { name: "笔记", id: 0 },
        { name: "其他", id: 1 },
      ],
      //list
      list: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    skillFun() {
      //技能标签随机点亮
      let self = this;
      let len = this.skillArr.length - 1;
      setInterval(function () {
        let n = 0;
        self.skill = Math.floor(Math.random() * (len - n + 1) + n); //生成范围内随机数
      }, 2000);
    },

    moreBtn() {
      //右上角按钮点击事件
    },
    // onSelect(action) {
    //   Toast(action.text);
    // },
    playVideo(obj) {
      //播放or暂停 视频
      let video = document.getElementById("video");
      if (obj == "btn") {
        //点击按钮
        video.play();
        this.showVideoBtn = false;
      } else {
        //点击视频
        video.pause();
        this.showVideoBtn = true;
      }
    },
    //list
     onLoad() {
      setTimeout(() => {
        this.getList();
      }, 1000);
      console.log("onload");
    },
    getList() {//获取笔记列表
      this.$http.get(this.$api.notes_list).then((res) => {
        console.log(res);
        if ((res.code == 200) & (res.data.length > 0)) {
          res.data.map((item, index) => {
            console.log(item.id);
            this.list.push(item);
          });
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= 10) {
          this.finished = true;
        }
      });
    },
  },
  created() {
    this.skillFun();
  },
};
</script>

<style lang="less" >
.van-popover__action {
  padding: 0 !important;
}
.van-popover__arrow {
  right: 4px !important;
}
.van-divider {
  margin: 0 0 10px 0 !important;
}
//tab标签栏
.van-tabs__nav--card {
  border-color: #fff !important;
}
.van-tab {
  border-color: #fff !important;
}
//list
.van-card{
  border-radius: 10px;
}
.van-card__content{
  text-align: left;
}
.van-tabs__wrap{
  margin-bottom: 15px;
}
video {
  // position: fixed;//视频定位方式设为固定
  // right: 0;
  // bottom: 0;//视频位置
  min-width: 100%;
  min-height: 180px; //不会因视频尺寸造成页面需要滚动
  // max-height: ;
  width: 100%;
  height: auto; //尺寸保持原视频大小
  z-index: -100; //z轴定位，小于0即可
  // -webkit-filter: grayscale(20%);//添加灰度蒙版，如果设定为100%则视频显示为黑白
}
.videoBtn {
  width: 260px;
  height: 40px;
  background-color: #2c2c2c7a;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 120px;
  margin-left: -130px;
  margin-top: -40px;
  z-index: 110;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.about {
  .bg {
    width: 100%;
    height: 240px;
    background: url(~@/assets/aboutBg.jpg);
    background-size: cover;
  }
  .contBox {
    display: flex;
    flex-wrap: wrap;
    .rightBox {
      width: 100%;
    }
    .rightBg {
      padding: 10px;
      background: #fff;
      margin-right: 20px;
      border-radius: 10px;
      margin-top: 5px;
      margin-left: 20px;
    }
    .foot{
      width: 100%;
      padding: 15px;
    }
  }
  .headImg {
    margin: -58px 20px 20px 20px;
    background: #fff;
    border-radius: 10px;
    padding: 0 10px 10px 10px;
  }
  .infoBox {
    padding: 0 20px;
    .bgColor {
      background: #fff;
      padding: 10px;
      border-radius: 10px;
    }
  }
  .skill {
    display: flex;
    flex-wrap: wrap;
    .table {
      padding: 5px 10px;
      background: #f6f8f9;
      margin-right: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
    }
    .tableActive {
      background: #fe796e;
      color: #fff;
    }
  }
  .infoText {
    display: flex;
  }
}
//////响应式 移动优先
@media screen and (min-width: 768px) {
  .leftBox {
    width: 30%;
  }
  .rightBox {
    width: 70% !important;
  }
  .rightBg{
    margin-left: 0!important;
  }
}
</style>
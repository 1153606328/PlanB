<template>
  <div class="addplan">
    <van-form @submit="onSubmit">
      <van-field
        v-model="title"
        name="title"
        label="标题"
        placeholder="请填标题"
        :rules="[{ required: true, content: '' }]"
      />
      <!-- 选择日期 -->
      <van-field
        readonly
        name="date"
        clickable
        label="选择日期"
        :value="date"
        placeholder="选择日期"
        @click="Dateshow = true"
      />
      <van-calendar v-model="Dateshow" type="range" :min-date="minDate" @confirm="onConfirm" />
      <!-- 选择标签 -->
      <van-field
        readonly
        clickable
        name="pickvule"
        v-model="pickvule"
        label="选择标签"
        :value="pickvule"
        placeholder="选择标签"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" round position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="onPickConfirm"
        />
      </van-popup>
      <van-field
        v-model="content"
        rows="1"
        name="content"
        autosize
        label="内容"
        type="textarea"
        placeholder="请输入内容"
      />
      <!-- 上传图片 -->
      <van-uploader
        :before-read="beforeRead"
        v-model="fileList"
        multiple
        :max-count="4"
        />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" color="#f95a5a">添加</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import areaList from "../assets/area";
export default {
  name: "Addplan",
  components: {},
  data() {
    return {
      Dateshow: false,
      minDate: new Date(2018, 0, 1),
      pickvule: "",
      showPicker: false,
      columns: ["游记", "探店", "开箱", "美食", "打卡"],
      date: "", //选中的日期
      title: "",//标题
      labes: "",//标签
      content:"",//内容
      fileList:[]
    };
  },
  methods: {
    onSubmit(values) {
      //提交表单
      console.log("submit", values);
      this.$toast.success("添加成功")
      // Toast.fail('失败文案');
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      //日期
      const [start, end] = date;
      this.Dateshow = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
    },
    onPickConfirm(value) {//选择标签完成
      this.pickvule = value;
      this.showPicker = false;
    },
    // 返回布尔值
    beforeRead(file) {
      if (file.type !== 'image/jpeg') {
        
        this.$toast('请上传 jpg 格式图片');
        return false;
      }
      console.log("222")
      return true;
    },
    // 返回 Promise
    asyncBeforeRead(file) {
      return new Promise((resolve, reject) => {
        if (file.type !== 'image/jpeg') {
          this.$toast('请上传 jpg 格式图片');
          reject();
        } else {
          let img = new File(['foo'], 'bar.jpg', {
            type: 'image/jpeg',
          });
          resolve(img);
        }
      });
    },

  }
};
</script>
<style lang="less">
.addplan {
    background: #fff;
  .van-cell{border-bottom: 1px solid #e2e2e2}
  .van-cell__title {
    text-align: left;
  }
}
</style>
<template>
  <div class="addplan">
    <van-form @submit="onSubmit">
      <van-field
        v-model="title"
        name="title"
        label="标题"
        placeholder="标题"
        :rules="[{ required: true, message: '请填计划标题' }]"
      />
      <van-field
        readonly
        name = "date"
        clickable
        label="选择日期"
        :value="date"
        placeholder="选择日期"
        @click="Dateshow = true"
      />
      <van-calendar v-model="Dateshow" type="range" :min-date="minDate" @confirm="onConfirm" />
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

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" color="#f95a5a">提交</van-button>
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
      pickvule:'',
      showPicker: false,
      columns: ['游记', '探店', '开箱', '美食', '打卡'],
      date: "", //选中的日期
      title: "",
      labes: ""
    };
  },
  methods: {
    onSubmit(values) {
      //提交表单
      console.log("submit", values);
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
    onPickConfirm(value) {
      this.pickvule = value;
      this.showPicker = false;

    },
  }
};
</script>
<style lang="less">
.addplan {
  .van-cell__title {
    text-align: left;
  }
}
</style>
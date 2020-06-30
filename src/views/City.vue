<template>
  <div>
    <van-skeleton title avatar :row="3" :loading="loading">
      <van-steps direction="vertical" :active="0">
        <van-step v-for="item in List" :key="item.id">
          <van-row type="flex" justify="space-between">
            <van-col span="6">{{item.city}}</van-col>
            <van-col span="6">{{item.time}}</van-col>
          </van-row>
        </van-step>
      </van-steps>
    </van-skeleton>
  </div>
</template>

<script>
export default {
  name: "City",
  data() {
    return {
      List: [], //
      loading: true
    };
  },
  methods: {
    getList() {
      //获取去过的城市列表
      this.$http.get(this.$api.home_list).then(res => {
        if ((res.code == 200) & (res.data.length > 0)) {
          res.data.map((item, index) => {
            console.log(item.id);
            this.List.push(item);
          });
          setTimeout(() => (this.loading = false), 1000);
        }
      });
    }
  },
  created() {
    this.getList();
  }
};
</script>

<style lang="less" scoped>
.van-step--vertical{
    border-bottom: 1px dashed #e0e0e0;
}
</style>
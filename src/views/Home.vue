<template>
  <div class="home">
    <HelloWorld />
    <h1 @click="getfun">1111</h1>
    <h1 @click="geteasy">2222</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {};
  },
  methods: {
    getfun() {
      this.$http.get(this.$api.userinfo,).then(result => {
        // 此处为获取数据后需要执行的代码，比如格式化数据、渲染数据列表等
        console.log('666')
      });
    },
    geteasy() {
      this.$http.get('https://www.easy-mock.com/mock/5d14342427a7e80b4b3451f1/easy/userinfo',).then(result => {
        // 此处为获取数据后需要执行的代码，比如格式化数据、渲染数据列表等
        console.log('666')
      });
    }
  }
};
</script>

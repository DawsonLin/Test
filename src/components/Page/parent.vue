<template>
  <div id="parent">
    <p>我是父组件</p>
    <input
      type="button"
      value="change"
      @click="change()"
    >
    <router-link to="/taobao">主页</router-link>
    <router-link to="/hao123">新闻</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'parent',
  data() {
    return {

    }
  },
  methods: {
    change() {
      this.$router.replace({ path: '/Douban' })
    }
  },
  components: {
    news: {
      template: `
          <div>
          <h3>我是新闻</h3>
          </div>
          `
    }
  }
}
</script>
<template id="myInput">
  <div>
    <el-input
      class="input"
      v-model="parent"
    ></el-input>
    <el-button
      size="medium"
      type="primary"
      @click="send()"
    >发送</el-button>
  </div>
</template>

<script>
export default {
  name: 'myInput',
  data() {
    return {
      a: '我是子组件的数据'
    }
  },
  methods: {
    send() {
      this.$emit("child-msg", this.a)
    }
  },
  props: ["parent"]

}
</script>

<style scoped>
.el-input {
  width: 200px;
}
</style>
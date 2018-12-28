<template>
  <div id="box">
    <h3>请输入汇率</h3>
    <div>
      <label for="rmb">人民币：</label>
      <input
        type="text"
        id="rmb"
        v-model='rmb'
      >
    </div>
    <div>
      <label for="rate">汇率：</label>
      <input
        type="number"
        :min='0.1'
        :max='10'
        :step='0.1'
        id="rate"
        v-model="rate"
      >
    </div>
    <div>
      <label for="exchange">换算后：</label>
      <input
        type="text"
        id="exchange"
        v-model="exchange"
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'RMBex',
  data() {
    return {
      rmb: 6.200000000000001,
      rate: 6.2,
      exchange: '',
    }
  },
  watch: {
    rate() {
      return this.exchange = this.rmb / this.rate
    },
    // exchange() {
    //   alert("变化了")
    // }
  },

}
</script>
<style scoped>
#box {
  width: 300px;
  margin: 0 auto;
}
#box div {
  width: 100%;
  text-align: left;
}
#rate {
  margin-left: 16px;
}
h3 {
  padding-right: 48px;
}
</style>
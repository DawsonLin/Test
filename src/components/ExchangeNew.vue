<template>
  <div>
    <p>请在天里输入22.5，将转为1个月</p>
    <label for="day">天:</label>
    <input
      type="text"
      id="day"
      v-model="day"
    >
    <label for="month">月：</label>
    <input
      type="text"
      id="month"
      v-model="month"
    >
  </div>
</template>
<script>
export default {
  name: 'ExchangeNew',
  data() {
    return {
      day: '',
      month: ''
    }
  },
  watch: {
    day(val) {
      this.day = val;
      this.month = val / 22.5;
      if (val == '') this.day = this.month = '';
    },
    month(val) {
      this.month = val;
      this.day = val * 22.5;
      if (val == '') this.month = this.day = '';
    }
  },

}
</script>
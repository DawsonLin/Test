<template>
  <div>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions1"
    >
    </el-date-picker>
  </div>
</template>
<script>
export default {
  name: 'date',
  data() {
    return {
      value1: '',
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      }
    }
  }
}
</script>
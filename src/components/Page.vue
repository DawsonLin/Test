<template id="page">
  <div>
    <input
      type="button"
      value="上一页"
      @click="lastPage()"
      :disabled='bb'
    >
    <span
      :class="{spans:page,active:val.isShow}"
      v-for="(val,index) in number"
      :key="index"
      @click="current(index)"
    >{{val.a}}</span>
    <input
      type="button"
      value="下一页"
      @click="nextPage()"
      :disabled="cc"
    >
  </div>
</template>
<script>

export default {

  data() {
    return {
      number: [
        { a: 1, isShow: true },
        { a: 2, isShow: false },
        { a: 3, isShow: false },
        { a: 4, isShow: false },
        { a: 5, isShow: false },
      ],
      page: true,
      cur: 0,
      ban: false,
    }
  },
  methods: {
    current(i) {
      this.cur = i;
      console.log(this.cur)
      this.number.forEach(function (ele, index) {
        return index == i ? ele.isShow = true : ele.isShow = false;
        /* if(index == i){
            ele.isShow = true;
        }else{
            ele.isShow = false
        } */
      })
    },
    lastPage() {
      if (this.cur > 0) {
        this.current(this.cur - 1)
      }

    },

    nextPage() {
      if (this.cur <= this.number.length) {
        this.current(this.cur + 1)
      }
    }
  },
  computed: {
    bb() {
      return this.cur == 0 ? true : false;

    },
    cc() {
      return this.cur == this.number.length - 1 ? true : false;
    }
  }
}
</script>
<style scoped>
.spans {
  display: inline-block;
  width: 20px;
  line-height: 20px;
  border-radius: 20px;
  margin: 5px;
  cursor: pointer;
}
.active {
  color: aliceblue;
  background-color: blue;
}
</style>
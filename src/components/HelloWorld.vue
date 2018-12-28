<template>
  <div id="HelloWorld">
    <myInput
      :parent="msg"
      @child-msg="get"
    ></myInput>
    <p>{{msg2}}</p>
  </div>
</template>

<script>
import myInput from '@/components/myInput.vue'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '我是父组件的数据',
      msg2: '在这里接收子组件的数据'
    }
  },
  methods: {
    get(a) {
      this.msg2 = a
    }
  },
  components: {
    "myInput": myInput
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>

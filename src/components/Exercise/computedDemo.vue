<template>
  <div>
    <button @click="add()">补充货物1</button>
    <p>总价为：{{price}}</p>
    <p>{{reverseTitle()}}</p>
    <p>{{reverseTitle1}}</p>
  </div>
</template>
<script>
export default {
  name: 'computedDemo',
  data() {
    return {
      package1: {
        count: 1,
        price: 15,
      },
      package2: {
        count: 2,
        price: 20
      },
      title: 'HelloDowson'
    }
  },
  methods: {
    add() {
      this.package1.count = this.package1.count + 1;
      this.package2.count = this.package2.count + 2;
    },
    reverseTitle() {
      return this.title.split('').reverse().join('');
    }
  },
  computed: {
    price() {
      return this.package1.count * this.package1.price + this.package2.count * this.package2.price
    },
    reverseTitle1() {
      console.log(this.title.split('').join(','))
      console.log(typeof this.title)
      return this.title.split('').reverse().join('');

    }
  }
}
</script>
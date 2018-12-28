<template>
  <div id="hao">
    <!-- <router-link to="/hao123/router">首页</router-link>
    <router-link to="/hao123/router">电视剧</router-link>
    <router-link to="/hao123/router">新闻</router-link> -->
    <ul class="ul">
      <li
        class="item"
        v-for="(item,ind) in menuList"
        :key="ind"
        @click="select(item.name)"
        :class="{isActive:nn == item.name? true:false}"
      >
        {{item.title}}
      </li>
    </ul>
    <div>
      <router-view :name="nn"></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hao',
  data() {

    return {
      activeName: 'first',
      nn: 'a',
      menuList: [
        {
          title: '首页',
          name: 'a'
        }, {
          title: '活动',
          name: 'b'
        }, {
          title: '活动2',
          name: 'c'
        },
        {
          title: '淘宝',
          name: 'd'
        },
        {
          title: '豆瓣api请求',
          name: 'e'
        }

      ]
    }
  },
  methods: {
    select(val) {
      console.log(val)
      this.nn = val;
      this.$router.push({ path: '/Hao123/router' })
    }
  }
}
</script>
<style scoped>
.ul {
  display: flex;
}
.ul li {
  margin-right: 20px;
  cursor: pointer;
  width: 90px;
  line-height: 30px;
  /* background: yellow; */
}
ul {
  list-style-type: none;
}
.isActive {
  color: green;
  border-top: 2px solid green;
}

.banner-top {
  width: 100%;
  height: 80px;
  border: 1px solid #dee3eb;
}
</style>

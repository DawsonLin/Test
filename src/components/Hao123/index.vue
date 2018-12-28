<template>
  <div id="index">
    <div class="ban-content">
      <div class="banner-top">
        <ul>
          <li
            v-for="(val,index) in newsList"
            :key="index"
          >
            <a href="#">{{val}}</a>
          </li>
        </ul>
      </div>
      <div class="ban-content-l">
        <div class="movie">
          <ul>
            <li><a href="#">电影</a> <a href="#">综艺</a></li>
            <li><a href="#">电影</a> <a href="#">综艺</a></li>
            <li><a href="#">电影</a> <a href="#">综艺</a></li>
            <li><a href="#">电影</a> <a href="#">综艺</a></li>
            <li><a href="#">电影</a> <a href="#">综艺</a></li>
            <li><a href="#">电影</a> <a href="#">综艺</a></li>
          </ul>
        </div>
        <div class="movie">
          <ul>
            <li><a href="#">电影</a> <a href="#">综艺</a></li>
            <li><a href="#">电影</a> <a href="#">综艺</a></li>
            <li><a href="#">电影</a> <a href="#">综艺</a></li>
            <li><a href="#">电影</a> <a href="#">综艺</a></li>
            <li><a href="#">电影</a> <a href="#">综艺</a></li>
            <li><a href="#">电影</a> <a href="#">综艺</a></li>
          </ul>
        </div>
      </div>
      <div class="ban-content-r">
        <ul>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
        </ul>
        <ul>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
        </ul>
        <ul>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
        </ul>
        <ul>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
        </ul>
        <ul>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
        </ul>
        <ul>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
        </ul>
        <ul>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
          <li><a href="#">百度</a>.<a href="#">贴吧</a></li>
        </ul>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsList: ['头条新闻', '人民网', '新华网', '央视网', '国际在线', '中国日报', '中国网', '中经网', '光明网', '央广网', '求是网', '中青网', '网信网', '深圳市政府'],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
<style scoped>
ul {
  list-style-type: none;
}
.innner_c {
  width: 1190px;
  height: 400px;
  margin: 50px auto;
  /* border: 1px solid #000; */
}
.banner-top {
  width: 100%;
  height: 60px;
  border: 1px solid #dee3eb;
  margin-bottom: 20px;
}
.banner-top ul {
  list-style-type: none;
}
.banner-top ul li {
  float: left;
  margin-right: 20px;
}
.banner-top ul li a:hover {
  text-decoration: underline;
  color: orangered;
}

.ban-content {
  padding-top: 74px;
  width: 100%;
  height: 320px;
}
.ban-content-l {
  width: 280px;
  height: 152px;
  border: 1px solid #dee3eb;
  float: left;
}
.ban-content-r {
  box-sizing: border-box;
  width: 900px;
  height: 184px;
  /* padding-top: 74px; */
  border: 1px solid #dee3eb;
  float: right;
}
.ban-content-r ul {
  float: left;
}
el-tab-pane {
  padding: 0 20px;
}
.ban-content .movie {
  float: left;
}
a {
  color: #000;
  text-decoration: none;
}
a:hover {
  color: orangered;
  text-decoration: underline;
}
</style>
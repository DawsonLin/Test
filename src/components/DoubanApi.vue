<template>
  <div id="doubanapi">
    <div>
      <el-input
        @keyup.native="get_text($event)"
        @keydown.down.native="changeDown()"
        @keyup.up.native="changeUp()"
        v-model="t1"
      ></el-input>
      <el-button
        type="primary"
        @click.native="search()"
      >百度一下</el-button>
    </div>

    <p v-show="myData.length==0">...暂无数据</p>
    <div>
      <ul class="search">
        <li
          v-for="(value,index) in myData"
          :key="index"
          :class="{grey:index ==now}"
        >
          {{value}}kolkk
        </li>
      </ul>
    </div>
    <el-button
      type="primary"
      @click="get()"
    >豆瓣api请求</el-button>
    <div class="hot">
      <p>正在热映</p>
    </div>
    <div class="movie-list">
      <ul>
        <li
          v-for="(item,index) in movieList"
          :key="index"
          :class="{isLi:index+1%5==0? true:false }"
        >
          <img
            :src="item.images.small"
            alt=""
          >
          <h4>{{item.title}}</h4>
        </li>
      </ul>
      <!--   <ul>
        <li>
          <img
            src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537667301.webp"
            alt=""
          >
          <h4>超越时空</h4>
        </li>
        <li>
          <img
            src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537667301.webp"
            alt=""
          >
          <h4>超越时空</h4>
        </li>
        <li>
          <img
            src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537667301.webp"
            alt=""
          >
          <h4>超越时空</h4>
        </li>
        <li>
          <img
            src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537667301.webp"
            alt=""
          >
          <h4>超越时空</h4>
        </li>
        <li>
          <img
            src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537667301.webp"
            alt=""
          >
          <h4>超越时空</h4>
        </li>
      </ul> -->
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'doubanapi',
  data() {
    return {
      myData: [],
      movieList: [],
      isLi: true,
      t1: '',
      now: -1
    }
  },
  methods: {
    get() {


      axios.get('/api/v2/movie/in_theaters?city=广州&start=0&count=10')
        .then(function (res) {
          console.log(res.data)
          this.movieList = res.data.subjects;
        }.bind(this)).catch(function (err) {
          console.log(err)
        })
    },
    get_text(ev) {
      if (ev.keyCode == 38 || ev.keyCode == 40) return;
      if (ev.keyCode == 13) {
        alert('success')
        window.open('https://www.baidu.com/s?wd=' + this.t1);
        this.ti = '';

      }
      var _this = this;
      axios.get('/baidu/5a1Fazu8AA54nxGko9WTAnF6hhy/su?' + `wd=${_this.t1}&jsonp='cb'`
      ).then(res => {
        console.log(res.data)
        let str = res.data
        let first = str.indexOf('(')
        let last = str.indexOf(')')
        let resultData = eval('(' + str.substring(first + 1, last) + ')')
        console.log(resultData)
        _this.myData = resultData.s
      }).catch(err => {
        console.log(err)
      })
    },
    changeDown() {
      this.now++;
    },
    changeUp() {
      this.now--;
    },
    search() {
      //   alert(11)
      window.open('https://www.baidu.com/s?wd=' + this.t1)
    }

  }
}
</script>
<style scoped>
/* * {
  padding: 0;
  margin: 0;
} */
.hot {
  margin: 10px 0;
  width: 676px;
  text-align: center;
  border-bottom: 1px solid #909399;
}
.hot p {
  line-height: 25px;
}
.movie-list {
  overflow: hidden;
  margin-left: 20px;
  width: 700px;
  /* height: 500px; */
  /* position: relative; */
}
.movie-list ul {
  /* position: absolute; */
  list-style-type: none;
}
.movie-list li {
  font-size: 12px;
  text-align: center;
  width: 115px;
  /* overflow: hidden; */
  margin-right: 20px;
  float: left;
}
.movie-list li:hover {
  background: skyblue;
}
.movie-list ul .isLi {
  margin-right: 0;
}
.movie-list li img {
  font-size: 12px;
  width: 114px;
  height: 160px;
}
.movie-list li h4 {
  line-height: 20px;
}
.grey {
  background-color: grey;
}
.search li:hover {
  background: #409eff;
}
</style>
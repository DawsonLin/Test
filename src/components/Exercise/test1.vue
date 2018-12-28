<template>
  <div>
    <el-button
      type="primary"
      @click="get"
    >豆瓣api请求</el-button>
    <h3>正在热映</h3>
    <div class="movie-list">
      <ul>
        <li
          v-for="(item,index) in movieList"
          :key='index'
        >
          <img
            :src="item.images.small"
            alt=""
          >
          <h4>{{item.title}}</h4>
          <p>{{item.rate}}</p>
        </li>
      </ul>
    </div>

    <div>
      {{myMessage}}
    </div>
    <el-button type="danger">主要按钮</el-button>
    <el-button
      type="info"
      icon="el-icon-close"
    >主要按钮</el-button>
    <el-button
      type="success"
      icon="el-icon-edit"
    >主要按钮</el-button>
    <el-button
      type="warning"
      icon="el-icon-search"
    >主要按钮</el-button>
    <el-button icon="el-icon-loading"></el-button>
    <el-button icon="el-icon-delete"></el-button>
    <el-row>
      <el-col :span="12">
        <div class="my-grid">
          <date></date>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="my-grid"></div>
      </el-col>

    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="my-grid"></div>
      </el-col>
      <el-col :span="8">
        <div class="my-grid"></div>
      </el-col>
      <el-col :span="8">
        <div class="my-grid"></div>
      </el-col>
    </el-row>
    <div>
      <div class="block">
        <span class="demonstration">默认不区分颜色</span>
        <el-rate v-model="value1"></el-rate>
      </div>
    </div>
    <div>
      <span class="demonstration">页数较少时的效果</span>
      <el-pagination
        layout="prev, pager, next"
        :total="50"
      >
      </el-pagination>
    </div>
    <div>
      <el-tabs
        v-model="activeName2"
        type="card"
      >
        <el-tab-pane
          label="用户管理"
          name="first"
        >
          <el-badge
            :value="12"
            class="item"
          >
            <el-button size="small">评论</el-button>
          </el-badge>
        </el-tab-pane>
        <el-tab-pane
          label="配置管理"
          name="second"
        >
          <el-switch
            v-model="bSign"
            active-color="#13ce66"
          >
          </el-switch>
        </el-tab-pane>
        <el-tab-pane
          label="角色管理"
          name="third"
        >
          <el-table
            :data="tableData"
            style="width: 100%"
          >
            <el-table-column
              prop="date"
              label="日期"
              width="180"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180"
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
            >
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane
          label="定时任务补偿"
          name="fourth"
        >定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    <my-button @click.native="get"></my-button>
  </div>
</template>
<script>
import Date from '@/components/exercise/date.vue'
import myButton from './button'
import axios from 'axios'
export default {
  name: 'test1',
  data() {
    return {
      movieList: [],
      myMessage: '默认数据',
      value1: 0,
      activeName2: 'first',
      bSign: true,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    get() {
      var that = this;
      axios.get('/api/v2/movie/in_theaters?city=广州&start=0&count=10').then(
        function (res) {
          console.log(res.data)
          console.log(res.data.title)
          //   that.movieList = res
          that.movieList = res.data.subjects;
        }).catch(function (error) {
          console.log(error)
        })
    }
  },
  components: {
    Date, myButton
  }
}
</script>
<style scoped lang="less">
@color: red;
.height(@h) {
  height: @h;
}

.my-grid {
  border: 1px solid @color;
  .height(50px);
}
.item {
  margin-top: 20px;
}
.movie-list {
  padding-top: 20px;
  margin-top: 10px;
  width: 678px;
  height: 235px;
  border-top: 1px solid #000;
}
.movie-list ul {
  list-style-type: none;
}
.movie-list li {
  width: 116px;
  height: 200px;
}
</style>
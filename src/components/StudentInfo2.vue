<template>
  <div>
    <div class="up inner_c">
      <h3>学生信息录入系统</h3>
      <div class="form">
        <div>
          <label for="name">姓名</label>
          <input
            type="text"
            id="name"
            placeholder="请输入姓名"
            v-model="list.name"
          >
        </div>
        <div>
          <label for="age">年龄</label>
          <input
            type="text"
            id="age"
            placeholder="请输入年龄"
            v-model="list.age"
          >
        </div>
        <div>
          <label for="sex">性别：</label>
          <select
            name=""
            id="sex"
            placeholder="请选择性别"
            v-model="list.sex"
          >
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </div>
        <div>
          <label for="phone">手机</label>
          <input
            type="text"
            id="phone"
            placeholder="请输入手机号码"
            v-model="list.phone"
          >
        </div>
        <div class="btn">
          <input
            type="button"
            value="创建新用户"
            @click="add()"
          >
        </div>
      </div>
    </div>
    <div class="down inner_c">
      <table
        border="1"
        cellspacing="0"
      >
        <thead class="head">
          <tr>
            <th>姓名</th>
            <th>性别</th>
            <th>年龄</th>
            <th>手机</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item,index) in myData"
            :key='index'
          >
            <td>{{item.name}}</td>
            <td>{{item.sex}}</td>
            <td>{{item.age}}</td>
            <td>{{item.phone}}</td>
            <td><input
                type="button"
                value="删除"
                @click="del(index)"
              ></td>
          </tr>
          <tr v-show="myData.length == 0">
            <td colspan="5">
              <p>暂无数据....</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentInfo2',
  data() {
    return {
      list: {
        name: '',
        age: '',
        sex: '男',
        phone: '',
      },
      myData: [],
    }
  },
  methods: {
    add() {
      this.myData.push({
        name: this.list.name,
        age: this.list.age,
        sex: this.list.sex,
        phone: this.list.phone
      })
      this.list.name = "";
      this.list.age = '';
      this.list.sex = '男';
      this.list.phone = '';
    },
    del(index) {
      this.myData.splice(index)
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.inner_c {
  margin: 50px auto;
}

.up {
  width: 50%;
  border: 1px solid orangered;
  text-align: center;
}

.down {
  width: 50%;
  border: 1px solid orangered;
}

table {
  text-align: center;
  width: 100%;
  margin: 0 auto;
}

.head {
  border: white;
  background: orangered;
}

.head tr th {
  padding: 5px;
}

td {
  padding: 5px;
}

.up .form div {
  margin-top: 5px;
}

.btn {
  margin: 5px auto;
}
</style>
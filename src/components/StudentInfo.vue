<template id="StudentInfo">
    <div>
    <div :class="[info]">
    <h4>学生信息录入系统</h4>
    <el-form ref="form" :model="sizeForm" label-width="80px" size="mini" >
        <el-form-item label="姓名：" >
            <el-input v-model="sizeForm.name" placeholder="请输入姓名" :class="myInput"></el-input>
        </el-form-item>
        <el-form-item label="年龄：">
            <el-input v-model="sizeForm.age" placeholder="请输入年龄" :class="myInput"></el-input>
        </el-form-item>
        <el-form-item label="性别：" >
            <el-select v-model="sizeForm.sex" placeholder="请选择性别" :class="myInput">
                <el-option label="男" value="男"></el-option>
                <el-option label="女" value="女"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="手机：" >
            <el-input v-model="sizeForm.phoneNum" placeholder="请输入手机号码" :class="myInput"></el-input>
        </el-form-item>
  
        <el-form-item size="mini">
            <el-button type="primary" @click="onSubmit">创建新用户</el-button>
        </el-form-item>
    </el-form>
    </div>
    <div :class="myTable">
        <template>
            <el-table
            :data="tableData"
            size="medium"
            border
            
            style="width: 100%">
                <el-table-column
                align="center"
                prop="name"
                label="姓名"
                width="120">
                </el-table-column>
                <el-table-column
                align="center"
                prop="sex"
                label="性别"
                width="120">
                </el-table-column>
                <el-table-column
                align="center"
                prop="age"
                label="年龄"
                width="120">
                </el-table-column>
                <el-table-column
                align="center"
                prop="phoneNum"
                label="手机"
                width="150">
                </el-table-column>
                <el-table-column
                align="center"
                prop=""
                label="删除"
                width="120">
                <template slot-scope="scope">
                    <el-button
                    align="center"
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, tableData)">删除
                    </el-button>
                </template>
                <p v-show="tableData.length==0">暂无数据....</p>
                </el-table-column>
            </el-table>
        </template>
    </div>
    </div>
    </template>

<script>
export default {
  name: "StudentInfo",
  data() {
    return {
      info: "info",
      myInput: 'my-input',
      myTable:'myTable',
      sizeForm: {
        name: "",
        age: "",
        sex: "",
        phoneNum: "",
      },
      tableData: [{
          name: '张三',
          sex: '男',
          age: '17',
          phoneNum: 13800138000
      },{
          name: '李四',
          sex: '男',
          age: '18',
          phoneNum: 13800138000
      }],
     
    };
  },

  methods: {
    handleDelete(index,row){
        this.tableData.splice(index,1)
    },
    onSubmit() {
        
        this.tableData.push({
            name: this.sizeForm.name,
            sex: this.sizeForm.sex,
            age: this.sizeForm.age,
            phoneNum: this.sizeForm.phoneNum,
        })
        this.sizeForm.name="";
        this.sizeForm.sex="";
        this.sizeForm.age="";
        this.sizeForm.phoneNum="";
      console.log(this.sizeForm)
    }
  }
};
</script>
<style scoped>
.info {
  border: 1px solid red;
  width: 50%;
}
.my-input{
    float: left;
    width: 30%;
}
.myTable{
    display: flex;
    flex-direction: row;
    -ms-flex-align: center;
    width: 50%;
    border: 1px solid red;
    margin-top: 20px;
}
</style>


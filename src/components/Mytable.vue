<template id="mytable">
    <div>
    <el-table
        :data="tableData" @selection-change="handleSelectionChange"
        style="width: 100%; margin:100px">
        <el-table-column
            type="selection"
            label="全选"
            width="150">
        </el-table-column>
        <el-table-column
            label="商品名称"
            width="180">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
        </el-table-column>
        <el-table-column
            label="商品单价"
            width="180">
            <template slot-scope="scope">
                
                <span style="margin-left: 10px">{{ scope.row.price }}</span>
            </template>
        </el-table-column>
        <el-table-column
            label="购买数量"
            width="180">
            <template slot-scope="scope">
                <el-input-number v-model="scope.row.buy_num" @change="handleChange" :min="1" :max="10" size="mini" label="描述文字">
                </el-input-number>
            </template>
        </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, tableData)">移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <p>已选择{{check_list.length}}件，总价：￥{{totalPrice | toCurrency}}</p>
    </div>
</template>

<script>
export default {
  name: "Mytable",
  data() {
    return {
      buy_num: 1,
      check_list: [],
      tableData: [
        {
          price: 6188,
          name: "iPhoneX",
          buy_num: 1,
        },
        {
          price: 5888,
          name: "iPhoneXS",
          buy_num: 1,

        },
        {
          price: 21488,
          name: "iPhoneXsmax",
          buy_num: 1,

        },
      ],
      
    };
  },
  filters: {
    toCurrency(val){
      var Num = [], count = 0;
       val = val.toString().split('');
      for(let i=val.length-1;i >=0; i--){
        count++;
        Num.unshift(val[i])
        if(count%3==0&&i!=0){
          Num.unshift(',')
        }
      }
      return Num.join('');
    }
  },
  computed: {
  
    total_num(){
      let num = 0;
      this.check_list.forEach(item=>{
        num+= item.buy_num
      })
      return num;
    },
    totalPrice (){
      let sum_price = 0;
      this.check_list.forEach((item)=>{ 
        // console.log(item.buy_num)
          sum_price += item.buy_num * item.price
      })
      return this.sum_price!=0? sum_price:sum_price="0元"
      
    }
  },
  methods: {
  
    handleDelete(index, rows) {
      rows.splice(index, 1)
    },
    handleChange(value){
      console.log(value);
    },
    handleSelectionChange(val){
      this.check_list = val;
      this.check_list.forEach(item=>{
        console.log(item.buy_num)
        
      })
    }
  },
  
};
</script>

<style>
</style>



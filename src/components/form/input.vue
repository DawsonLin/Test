<template id="input1">
    <div>
        <input type="text">
        <input type="radio" id="input1"> <label for="input1">用户名</label>
        <input type="checkbox" id="input2"> <label for="input2">密码</label>
        <input type="text" v-model.number.lazy="msg">
        <p>{{msg}}</p>
        <hr>
        <input type="text" v-model.trim="msg2">
        <br>
        <input type="button" value="增加" @click="add()">
        <p>{{count}}</p>
    </div>
</template>
<script>
    export default{
        name:'input1',
        data(){
            return {
                msg:'',
                msg2:'',
                count: 1
            }
        },
        methods:{
           add(){
               this.count = this.count+1;
           }
        }
    }
</script>
<style>

</style>
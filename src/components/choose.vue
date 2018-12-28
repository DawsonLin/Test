<template id="choose">
    <div>
        <input v-model="chengji" type="text" :placeholder="placeholder">
        <input type="button" value="查询" @click="check()">
    </div>
</template>
<script>
    export default {
        name: 'choose',
        data () {
            return {
                placeholder: '请输入您的成绩',
                msg:'Hello',
                chengji:'',
            }
        },
        methods: {
            check(){
                if(this.chengji>=90){
                    alert("优秀")
                }
                else if(this.chengji>=60){
                    alert("及格")
                } else {
                    alert("不及格")
                }
            }
        }
    }
</script>
<style>

</style>
<template>
    <div>
        <div>
            <p>请输入数字</p>
            <label for="rentian">仁天:</label>
            <input v-model="num">
        </div>
        <div>
                <span id="renyue">仁月:</span>
                <span>{{newN}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Exchange',
        data(){
            return {
                num:'',
            }
        },
        watch: {
            num(){
                console.log(this.num.length)
                if(this.num.length >= 1){
                    this.num = this.num.replace(/[^\d]/g,'')
                }
            }
        },

        computed: {
            newN(){
                var number = [], count = 0;
                 var val = this.num.toString().split('')
                 if(val.length==2){
                     val.unshift(0+'.');
                     return val.join('')
                 }
                for(let i=val.length-1; i>=0; i--){
                    count++;
                    number.unshift(val[i]);
                    if(count==2 &&val.length>2){
                        number.unshift('.')
                    }
                }   
                return number.join('')
            }
        }
    }
</script>
<style>
    #renyue{
        text-align: left;
    }
</style>
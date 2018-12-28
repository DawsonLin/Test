<template id="keyDemo">
    <div>
        <div id="button" v-on:mouse="">
            my age is {{age}}
            <button @click.once="increase(1)">加一岁</button>
            <button @click="decrease(1)">减一岁</button>
            <button @dblclick="increase(10)">加十岁</button>
        </div>
    </div>
</template>
<script>
    export default{
        name:'keyDemo',
        data(){
            return {
                age: 20
            }
        },
        methods: {
            increase(e){
                this.age = this.age +e
            },
            decrease(e){
                this.age = this.age -e
            },
            
        }
    }    
</script>
<template>
  <div class="hello">
    <h1>B:{{ num }}</h1>
       <button @click="updateB">+B</button>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'CounterB',
  data() {
    return {
      num:localStorage.getItem("n"),
      title:"A Title"
    }
  },
  methods:{
    updateB(){
      let n = localStorage.getItem("n")
      localStorage.setItem("n",parseInt(n)+1)
    }
  },
  mounted(){
    setInterval(()=>{
       this.num = localStorage.getItem("n")
    },100)
  }
  
}
</script>

 
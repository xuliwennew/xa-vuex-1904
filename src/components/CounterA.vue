<template>
  <div class="hello">
    <h1>A:{{ num }}</h1>
     <button @click="updateA">+A</button>
  </div>
</template>

<script>
import {mapGetters} from "vuex" //mapGetters用来在组件和store中获取getters中的值 
export default {
  name: 'CounterA',
  data() {
    return {
      // num:localStorage.getItem("n"), //全局
      // title:"B title" //private
      // num:this.$store.state.num
    }
  },
  computed:{

    ...mapGetters({
      num:"getNum" //store.getters 
     
    })
  },
  methods:{
    updateA(){
      // let n = localStorage.getItem("n")
      // localStorage.setItem("n",parseInt(n)+1)
      this.$store.dispatch("inc")
    }
  },
  mounted(){
    // setInterval(()=>{
    //    this.num = localStorage.getItem("n")
    // },100)
  }
  
}
</script>

 
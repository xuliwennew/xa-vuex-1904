<template>
  <div class="hello">
     <counter-a></counter-a>
     <hr/>
     <counter-b></counter-b>
  </div>
</template>

<script>
import CounterA from './CounterA';
import CounterB from './CounterB';
export default {
  name: 'HelloWorld',
  components:{
    CounterA,
    CounterB
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div id="app">
     <h1> welcome Vue state management </h1>
     <AnotherResult :counter="counter"></AnotherResult>
     <Result :counter="counter"></Result>
     <hr>
    <Counter @updated="counter= $event"></Counter>
    <AsynchCounter @updated="counter= $event"></AsynchCounter>
    <hr>
    <input type="text" v-model="value">
    <p> input value is {{ value }} </p>

  </div>
</template>

<script>
import Counter from './components/Counter';
import Result from './components/Result';
import AnotherResult from './components/AnotherResult';
import AsynchCounter from './components/AsyncCounter';

export default {
  name: 'app',
  components: {
    Counter,
    Result,
    AnotherResult,
    AsynchCounter
  },
  data:function(){
    return {
      counter:0
    }
  },
  computed:{
    value:{
      get(){
        return this.$store.getters.value;
      },
      set(value){
        this.$store.dispatch('updateValue',value)
      }
      
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

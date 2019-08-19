import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex" //安装了一个plugin 

//Vue extends Vuex 
Vue.use(Vuex) //Vue.install

// 引用store
import store from "./store"


Vue.config.productionTip = false

new Vue({
  store, //vue.prototype.$store
  render: h => h(App)
}).$mount('#app')

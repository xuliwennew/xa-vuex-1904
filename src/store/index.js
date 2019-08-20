import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex) 

import eggModule from "./modules/eggModule"
import numberModule from "./modules/numberModule"

//plugins
let loggerPlugin = (store)=>{
  store.subscribe((mutation,state)=>{
     console.log(mutation)
     console.log(state)
  })
}

//创建一个公共的store,用store来管理组件间需要共享的状态
let store = new Vuex.Store({
    modules:[
      eggModule,
      numberModule
    ],
    plugins:[loggerPlugin]
    
})

export default store
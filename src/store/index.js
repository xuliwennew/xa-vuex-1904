import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex) 


//创建一个公共的store,用store来管理组件间需要共享的状态
let store = new Vuex.Store({
    state:{ //store中需要共享的组件的状态
       num:0,
       rice:"reice",
       eggs:"eggs"
    },
    //store中的状态修改，需要通过store来完成,
    mutations:{  //用来更新的状态的地方
      add:(state,data)=>{
         return state.num++  //add 动作类型 {type:"add"}
      }
    },
    actions:{ //接收组件的发送过来的请求，提交给mutations处理
      inc:(store,payload)=>{ //component发送的一个动作类型 
         store.commit("add")  //把动作类型{type:"add"} 提交到mutations
      }
    },
    getters:{  //用来获取更新后的状态
      getNum:(state)=>{  //通过getNum动作，获取最新的状态 num
          return state.num + 1000
      }
    }
})

export default store
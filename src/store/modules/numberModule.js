import * as types  from "../types"

console.log(types)

export default {

state:{ //store中需要共享的组件的状态
       num:0
    },
    //store中的状态修改，需要通过store来完成,
    mutations:{  //用来更新的状态的地方  //同步 pure function
      [types.ADD](state,data){
         console.log("mutations: add ")
         return state.num++  //add 动作类型 {type:"add"} 
      }
    },
    //side effect 
    actions:{ //接收组件的发送过来的请求，提交给mutations处理
      inc:(store,payload)=>{ //component发送的一个动作类型 
        //  setTimeout(() => {
             
        //  }, 2000);
         console.log("actions: inc ")
             store.commit(types.ADD)  //把动作类型{type:"add"} 提交到mutations
      }
    },
    getters:{  //用来获取更新后的状态
      getNum:(state)=>{  //通过getNum动作，获取最新的状态 num
          console.log("getters: getnum")
          return state.num + 1000
      }
    }

}
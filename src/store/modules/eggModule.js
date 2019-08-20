

export default {
    state:{ //store中需要共享的组件的状态
       rice:"reice",
       eggs:"eggs"
    },
    //store中的状态修改，需要通过store来完成,
    mutations:{  //用来更新的状态的地方  //同步 pure function
      cookEgg:(state,data)=>{
        return state.rice + state.eggs;
      }
    },
    //side effect 
    actions:{ //接收组件的发送过来的请求，提交给mutations处理
      
    },
    getters:{  //用来获取更新后的状态
      
    }
}
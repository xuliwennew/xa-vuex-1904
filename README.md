# vuex-1904

## vuex使用场景及使用
```
1,vuex使用场景
  兄弟组件的之间进行数据共享
2.vuex核心概念
  store :vuex的对象
  state : 仓库管理的对象(shared states)
  mutations:  根据动作类型更改state,返回新的状态
  actions: side effect ，在mutations执行之前，来做side effect
  getters : 获取更新后的状态树
  modules : 分类对状态进行管理
  plugins : 插件 :监听state的变化 
3. 五步法
  3.1 安装vuex npm install vuex -S Vue.use(Vuex)
  3.2 通过Vuex.Store 来创建一个仓库(store)
  3.3 设计store中的状态管理流程(state,mutations,actions,getters,module)
  3.4 在Vue实例中注册store 
  3.5 通过mapGetters,mapActions绑定store中的getters,actions 
```
 
//创建大仓库
import { createPinia } from 'pinia';
//createPinia方法可以用于创建大仓库
let store = createPinia();
//对外暴露,安装仓库
export default store;

// vue3 使用vuex的写法
/* import { createStore } from 'vuex';

export default createStore({
  state: {},
  mutations: {},
  actions: {}, 
  getters: {}
}); */
// 使用的话，在vue文件那边直接从vuex中引入useStore
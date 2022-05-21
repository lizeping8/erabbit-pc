import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// vue2.0创建仓库 new Vuex.store({})
// vue3.0创建仓库 createStore({})
import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'
export default createStore({
  modules: {
    cart,
    user,
    category
  },
  // 配置插件
  // 默认存储在localStorage
  plugins: [createPersistedState({
    // 本地存储
    key: 'erabbit-store',
    paths: ['user', 'cart']
  })]
})

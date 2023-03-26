import Vue from 'vue'
import App from './App.vue'
import '@/mobile/flexible.js'
import '@/styles/reset.css'
import router from './router'

// 全局注册 Vant 组件（按需引入）
import { NavBar, Tabbar, TabbarItem, Col, Row, Image as VanImage, Cell, CellGroup, Icon, Search, PullRefresh } from 'vant'

Vue.use(Col)
Vue.use(Row)
Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(VanImage)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Icon)
Vue.use(Search)
Vue.use(PullRefresh)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

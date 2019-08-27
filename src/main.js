import Vue from 'vue'
import App from './App.vue'

// 导入element-ui组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入router对象 @代表 src的绝对路径
import router from '@/router'

// 导入axios包 简单配置
import axios from '@/api'

// 导入插件
import myPlugin from '@/components'
Vue.use(myPlugin)

Vue.prototype.$http = axios

// 注册element-ui组件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  // 使用router对象
  router,
  render: h => h(App)
}).$mount('#app')

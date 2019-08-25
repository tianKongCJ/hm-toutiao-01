// 职责: 创建一个router实例,并导出给main.js使用
// 导入vue-router组件
// 导入vue组件
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入 login 组件
import Login from '@/views/login'

// 导入 Home 组件
import Home from '@/views/home'

// 导入 Welcome 组件
import Welcome from '@/views/welcome'

// 导入 404 组件
import NotFound from '@/views/404'

// 注册路由,并使用
Vue.use(VueRouter)

// 实例化router对象
const router = new VueRouter({
  // 定义路由规则
  routes: [
    // 登录路由
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      component: Home,
      children: [{ path: '/', name: 'welcome', component: Welcome }]
    },
    { path: '*', name: '404', component: NotFound }
  ]
})

// 导出router实例
export default router

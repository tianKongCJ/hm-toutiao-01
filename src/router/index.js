// 职责: 创建一个router实例,并导出给main.js使用
// 导入vue-router组件
// 导入vue组件
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入 login 组件
import Login from '@/views/login'

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
    }
  ]
})

// 导出router实例
export default router

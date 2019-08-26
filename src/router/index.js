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

// 导入store本地存储文件
import store from '@/store'

// 导入测试test文件
import Test from '@/views/test'

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
      // 欢迎页面 如果子路由有名字,父级路由的名字要删除
      children: [{ path: '/', name: 'welcome', component: Welcome }]
    },
    { path: '/test', name: 'test', component: Test },
    // 404 处理通配
    { path: '*', name: '404', component: NotFound }
  ]
})

// 前置路由守卫
router.beforeEach((to, from, next) => {
  const user = store.getUser()
  // 如果访问的是登录页面,放行
  // 如果访问的是其他页面,且没有登录过,那拦截并跳转到登录页面
  // if(to.path === '/login') return next()
  // if(!user.token) return next('/login')
  // next()
  if (to.path !== '/login' && !user.token) return next('/login')
  next()
})

// 导出router实例
export default router

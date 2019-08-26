// 配置一个符合项目需要的axios  导出去并进行全局配置
import axios from 'axios'
// 导入 store
import store from '@/store'

// 导入 router
import router from '@/router'
// 1.进行配置 基准地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// 2.请求头 token
// axios.defaults.headers.Authorization = `Bearer ${store.getUser().token}`

// 配置一个请求拦截器(在每次请求的头部添加上一个token)
// 每次发送请求之前,执行拦截器
axios.interceptors.request.use((config) => {
  // 拦截成功 加token
  config.headers.Authorization = `Bearer ${store.getUser().token}`
  return config
}, (err) => {
  // 拦截失败
  return Promise.reject(err)
})

// 响应拦截器(每一次响应后)
axios.interceptors.response.use(res => res, err => {
  // 1.获取状态码
  const status = err.response.status
  // 2.判断401
  if (status === 401) {
    // 3.清除无效token
    store.delUser()
    // 4.使用router 跳转登录页面
    router.push('/login')
  }
  return Promise.reject(err)
})

// 导出axio
export default axios

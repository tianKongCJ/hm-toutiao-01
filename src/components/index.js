// 定义一个插件
// 规则: 模块 向外暴露一个对象,对象中选项install,指向的是函数,函数传参vue
import MyBread from '@/components/my-bread'
export default {
  install (Vue) {
    // Vue.component('组件名称', '组件的配置对象')
    Vue.component(MyBread.name, MyBread)
  }
}

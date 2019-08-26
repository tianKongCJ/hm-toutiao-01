// 提供存储用户信息的函数 提供获取用户信息的函数 提供删除用户信息的函数
const KEY = 'hm-toutiao-01-user'
export default {
  // 存储用户信息
  setUser (user) {
    // 把user对象存储到sessionStorage
    const josnStr = JSON.stringify(user)
    window.sessionStorage.setItem(KEY, josnStr)
  },
  // 获取用户信息
  getUser () {
    // 把 sessionStorage 获取出来, 转换对象形式
    const josnStr = window.sessionStorage.getItem(KEY) || '{}'
    return JSON.parse(josnStr)
  },
  // 删除用户信息
  delUser () {
    // 删除 KEY 对应的数据
    window.sessionStorage.removeItem(KEY)
  }
}

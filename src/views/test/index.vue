<template>
    <div class="container">Test</div>
</template>

<script>
export default {
//   async created () {
  // 使用 promise 方式
  // 调用 a 接口
  // this.$http.get('http://localhost:3000/a').then(res => {
  //   console.log(res.data)
  //   // 调用 b 接口
  //   return this.$http.get('http://localhost:3000/b')
  // }).then(res => {
  //   console.log(res.data)
  // })

  // 函数的返回值 加上await之后 是then接收的数据
  // 在使用await之后 必须在外层函数声明async
  // const resA = await this.$http.get('http://localhost:3000/a')
  // const resB = await this.$http.get('http://localhost:3000/b')
  // console.log(resA.data, resB.data)
//   }
}
</script>

<style scoped lang="less">
</style>

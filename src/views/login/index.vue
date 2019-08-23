<template>
    <div class="container">
        <!-- 卡片 -->
        <el-card class="my-card">
            <!-- logo -->
            <img src="../../assets/images/logo_index.png" alt="">
            <!-- form表单 -->
            <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
                <el-form-item prop="mobile">
                    <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item prop="code">
                    <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:238px;margin-right:10px;"></el-input>
                    <el-button>发送验证码</el-button>
                </el-form-item>
                <el-form-item>
                    <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login()" style="width:100%">登 录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
  data () {
    // 定义校验函数 先声明
    const checkMobile = (rule, value, callback) => {
      // 必须是手机格式
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error('手机号格式不对'))
      }
      callback()
    }
    return {
      // form表单数据对象
      loginForm: {
        // 字段参考接口文档
        mobile: '',
        code: ''
      },
      // 校验的规则对象
      loginRules: {
        // 定义字段对应的规则,(多种)
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          // 需要手机格式校验 没有提供默认的校验规则 change值改变的时候触发
          { validator: checkMobile, trigger: 'change' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入6位验证码', trigger: 'blur' }
        ]
      }

    }
  },
  methods: {
    login () {
      // 对整个表单进行校验
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // 进行登录
          // 调用接口 ,简单配置axios
          this.$http.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations', this.loginForm).then(res => {
            // 成功 跳转到首页
            this.$router.push('/')
          }).catch(() => {
            // 失败 提示
            this.$message.error('手机号或验证码错误')
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
    // 设置容器的样式 全屏容器
    .container{width: 100%;height: 100%;position: absolute;top: 0;left: 0;background:url('../../assets/images/login_bg.jpg') no-repeat center / cover;
        // 给卡片设置样式
        .my-card{width: 400px;height: 350px;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);
            // logo样式
            img{display: block;width: 200px;margin: 0 auto 30px;}
        }
    }
</style>

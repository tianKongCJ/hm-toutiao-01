<template>
    <div class="container">
        <!-- 卡片 -->
        <el-card class="my-card">
            <!-- logo -->
            <img src="../../assets/images/logo_index.png" alt="">
            <!-- form表单 -->
            <el-form :model="loginForm">
                <el-form-item>
                    <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:238px;margin-right:10px;"></el-input>
                    <el-button>发送验证码</el-button>
                </el-form-item>
                <el-form-item>
                    <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width:100%">登 录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      // form表单数据对象
      loginForm: {
        // 字段参考接口文档
        mobile: '',
        code: ''
      }
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

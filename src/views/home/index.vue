<template>
    <el-container class="home-container">
        <el-aside :width="isCollapse?'64px':'200px'">
            <!-- logo -->
            <div class="logo" :class="{miniLogo:isCollapse}"></div>
            <!-- 导航菜单 -->
            <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                background-color="#002033"
                text-color="#fff"
                active-text-color="#ffd04b"
                :collapse="isCollapse"
                :collapse-transition="false">
                <!-- el-submenu 拥有子菜单的菜单项 el-menu-item 是没有子菜单的选项-->
                <el-menu-item index="1">
                    <i class="el-icon-s-home"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-document"></i>
                    <span slot="title">内容管理</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-picture"></i>
                    <span slot="title">素材管理</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-s-promotion"></i>
                    <span slot="title">发布文章</span>
                </el-menu-item>
                <el-menu-item index="5">
                    <i class="el-icon-chat-dot-round"></i>
                    <span slot="title">评论管理</span>
                </el-menu-item>
                <el-menu-item index="6">
                    <i class="el-icon-present"></i>
                    <span slot="title">粉丝管理</span>
                </el-menu-item>
                <el-menu-item index="7">
                    <i class="el-icon-setting"></i>
                    <span slot="title">个人设置</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
        <el-header>
            <span @click="toggleMenu()" :class="isCollapse?'icon el-icon-s-unfold':'icon el-icon-s-fold'"></span>
            <span class="text">江苏传智播客科技教育有限公司</span>
            <el-dropdown>
                <span class="el-dropdown-link">
                <!-- 用户名和头像 -->
                <img class="avatar" src="../../assets/images/avatar.jpg" alt="">
                <span class="username">&nbsp;&nbsp;洛神</span>
                <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-unlock">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-header>
        <el-main>
            <!-- 欢迎子路由 -->
            <router-view></router-view>
        </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    toggleMenu () {
      // 切换侧边栏的展开与收起
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style scoped lang="less">
    .home-container{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        .el-aside{
            background-color:#002033;
            .logo{
                width: 100%;
                height: 60px;
                background: #002244 url('../../assets/images/logo_admin.png') no-repeat center / 140px auto
                 }
            .miniLogo{
                background-image: url('../../assets/images/logo_admin_01.png');
                background-size: 36px auto;
            }
            .el-menu{
                border-right:none;
                }
            }
            .el-header{
                border-bottom:1px solid #ddd;
                line-height: 60px;
                .icon{
                    margin-right: 10px;
                    font-size: 24px;
                    vertical-align: middle;
                    }
                .text{
                    vertical-align: middle;
                    }
                .el-dropdown{
                    float: right;
                    .avatar{
                        width: 30px;
                        vertical-align: middle;
                        }
                    .username{
                        vertical-align: middle;
                        font-weight: 700;color: #333;
                        }
                    }
                }
            }
</style>

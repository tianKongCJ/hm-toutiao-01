<template>
    <div class="container">
        <!-- 筛选项 -->
        <el-card>
            <!-- 头部 -->
            <div slot="header">
                <my-bread>内容管理</my-bread>
            </div>
            <!-- 表单 -->
            <el-form label-width="80px" size="small">
                <el-form-item label="状态">
                    <el-radio-group v-model="reqParams.status">
                        <el-radio :label="null">全部</el-radio>
                        <el-radio :label="0">草稿</el-radio>
                        <el-radio :label="1">待审核</el-radio>
                        <el-radio :label="2">审核通过</el-radio>
                        <el-radio :label="3">审核失败</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="频道">
                    <el-select v-model="reqParams.channel_id" placeholder="请选择">
                        <el-option
                        v-for="item in channelOptions"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="日期">
                    <el-date-picker
                    v-model="dataArr"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">筛选</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <!-- 筛选结果 -->
        <el-card>
            <div slot="header">
                根据筛选条件共查询到 0 条结果:
            </div>
            <!-- 表格 -->
            <el-table :data="articles">
                <el-table-column prop="title" label="标题"></el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-pagination
            background
            layout="prev, pager, next, total"
            :total="1000">
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
// 导入 my-bread组件
// import MyBread from '@/components/my-bread'
export default {
  // 使用
//   components: { MyBread },
  data () {
    return {
      // 提交后台参数 值为null的时候 字段是不会发送给后台的.
      reqParams: {
        status: null,
        channel_id: null,
        begin_pubdate: null, // 起始时间
        end_pubdate: null // 结束时间
      },
      // 日期数据
      dataArr: [], // 0索引对应的是起始时间 1索引对应的是结束时间
      // 频道选项数据
      channelOptions: [{ id: 100, name: 'java' }],
      // 文章列表数据
      articles: [{ title: '文章标题' }, { title: '文章标题xxx' }]
    }
  }
}
</script>

<style scoped lang="less">
    .el-card{
        margin-bottom: 20px;
    }
    .el-pagination{
        text-align: center;margin-top: 20px;
        }
</style>

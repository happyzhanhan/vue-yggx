<!-- Created by happy<1659725767@qq.com> on 2018/6/14 16:22.-->
<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/userinfo' }"><i class="el-icon-location"></i>&nbsp;&nbsp;用户中心</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/userinfo' }">{{thistitle}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        name: 'menutree',
        methods:{},
        props: {
            thistitle: {
                type: String,
                default: '个人资料'
            }
        },
    }
</script>

<style>
    .menutop span{
        line-height:56px;
    }
</style>
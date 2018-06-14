<template>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>用户管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">个人资料</el-menu-item>
                        <el-menu-item index="1-2">我的钱包</el-menu-item>
                        <el-menu-item index="1-3">账户安全</el-menu-item>
                        <el-menu-item index="1-4">交易地址管理</el-menu-item>
                        <el-menu-item index="1-5">绑定银行卡</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
</template>


<script>
    export default {
        name: 'userleft',
        methods: {
            handleOpen(key, keyPath) {
        console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
        console.log(key, keyPath);
    }
    }
    }
</script>

<style lang="scss">
    .el-submenu .el-menu-item{
        min-width:auto;
    }
    .leftmenu{
        width:180px;
    }

</style>
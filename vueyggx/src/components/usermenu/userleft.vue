<template>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu
                    :default-active="defaultactive"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                   >
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>用户管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1"><router-link to="/userinfo">个人资料</router-link></el-menu-item>
                        <el-menu-item index="1-2"><router-link to="/usermoney">我的钱包</router-link></el-menu-item>
                        <el-menu-item index="1-3"><router-link to="/usersafe">账户安全</router-link></el-menu-item>
                        <el-menu-item index="1-4"><router-link to="/useraddress">交易地址管理</router-link></el-menu-item>
                        <el-menu-item index="1-5"><router-link to="/userbank">绑定银行卡</router-link></el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
</template>


<script>
    export default {
        name: 'userleft',
        data(){
            return{

            }
        },
        methods: {
            handleOpen(key, keyPath) {
            console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        props: {
            defaultactive: {
                type: String,
                default: '1-1'
            }
        },

    }
</script>

<style lang="scss">
    .el-submenu .el-menu-item{
        min-width:auto;
    }
    .leftmenu{
        width:180px;
        float:left;
    }
    .el-menu-item-group__title{
        display:none;
    }
    .el-submenu .el-menu-item a{
        color:#333;
    }
    .el-submenu .el-menu-item a.router-link-active{
        color:#f60;
    }

</style>
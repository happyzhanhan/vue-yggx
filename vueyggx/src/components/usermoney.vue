<template>
    <div class="userinfo">
        <div class="miniw">
            <div class="leftmenu">
                <userleft :defaultactive="defaultactive"></userleft>
            </div>
            <div class="rightbox">
                <div class="menutop">
                    <menutree :thistitle="titlename"></menutree>
                </div>

                <div class="mainbox">
                    <div class="wallet">
                        <div class="moneybox">
                            <el-row :gutter="20">
                                <el-col :span="12">
                                    <div class="onemoney">
                                        <el-card class="box-card">
                                            <div slot="header" class="clearfix">
                                                <span> 账户余额（元）
                                                    <el-tooltip class="item" effect="dark" content="用户购物业务" placement="top-end">
                                                        <i class="header-icon el-icon-info"></i>
                                                    </el-tooltip>
                                                </span>
                                                <div class="btnright">
                                                    <el-button type="danger" size="mini" plain>充值</el-button>
                                                    <el-button type="info" size="mini"  plain>明细</el-button>
                                                </div>
                                            </div>
                                            <div class="moneyshow">
                                                <big> 1688.00</big><i class="el-icon-view"></i>
                                            </div>
                                        </el-card>
                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="onemoney">
                                        <el-card class="box-card">
                                            <div slot="header" class="clearfix">
                                                <span> 便民余额（元）
                                                    <el-tooltip class="item" effect="dark" content="仅用于便民充值业务" placement="top-end">
                                                        <i class="header-icon el-icon-info"></i>
                                                    </el-tooltip>
                                                </span>
                                                <div class="btnright">
                                                    <el-button type="danger" size="mini" plain>充值</el-button>
                                                    <el-button type="info" size="mini"  plain>明细</el-button>
                                                </div>
                                            </div>
                                            <div class="moneyshow">
                                                <big> 1688.00</big><i class="el-icon-view"></i>
                                            </div>
                                        </el-card>
                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="onemoney">
                                        <el-card class="box-card">
                                            <div slot="header" class="clearfix">
                                                <span> 我的佣金（元）
                                                    <el-tooltip class="item" effect="dark" content="购物所得" placement="top-end">
                                                        <i class="header-icon el-icon-info"></i>
                                                    </el-tooltip>
                                                </span>
                                                <div class="btnright">
                                                    <el-button type="danger" size="mini" plain>转余额</el-button>
                                                    <el-button type="success" size="mini" plain>提现</el-button>
                                                    <el-button type="info" size="mini"  plain>明细</el-button>
                                                </div>
                                            </div>
                                            <div class="moneyshow">
                                                <big> 1688.00</big><i class="el-icon-view"></i>
                                            </div>
                                        </el-card>
                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="onemoney">
                                        <el-card class="box-card">
                                            <div slot="header" class="clearfix">
                                                <span> 我的货款（元）
                                                    <el-tooltip class="item" effect="dark" content="商家回款 = 买家付款金额 - （利润+佣金）" placement="top-end">
                                                        <i class="header-icon el-icon-info"></i>
                                                    </el-tooltip>
                                                </span>
                                                <div class="btnright">
                                                    <el-button type="danger" size="mini" plain>转余额</el-button>
                                                    <el-button type="success" size="mini" plain>提现</el-button>
                                                    <el-button type="info" size="mini"  plain>明细</el-button>
                                                </div>
                                            </div>
                                            <div class="moneyshow">
                                                <big> 1688.00</big><i class="el-icon-view"></i>
                                            </div>
                                        </el-card>
                                    </div>
                                </el-col>

                            </el-row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import userleft from '@/components/usermenu/userleft.vue';
    import menutree from '@/components/usermenu/menutree.vue';
    export default {
        name: 'usermoney',
            data() {
            return {

                defaultactive:'1-2',
                titlename:'我的钱包',

            }
        },
        methods: {

        },
        components:{userleft,menutree},
    }

</script>

<style lang="scss">
    .rightbox{
        max-width:970px;
        float:left;
        padding-left:50px;
        border-left: solid 1px #e6e6e6;
        margin-left:-1px;
    }
    .mainbox{
        .wallet{
            float:left;
            width:100%;
            .onemoney{
                width:100%;
                margin-top:20px;
                .clearfix{
                    display:flex;
                    justify-content:space-between;
                    span{
                        font-size:14px;
                    }
                }
                .moneyshow{
                    big{
                        color:#f60;
                        font-size:30px;
                    }
                    i{
                        cursor:pointer;
                        margin-left:20px;
                    }
                }
            }
        }
    }
    .el-collapse-item__header{
        text-align:left;
        height:auto;
    }

</style>
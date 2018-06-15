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
                    <div class="personaldata">
                        <div class="toptips">
                            <el-tag type="warning"><i class="el-icon-info"></i> &nbsp;&nbsp;请如实填写真实姓名和身份证号，以便我们核实您资料的真实性！</el-tag>
                        </div>

                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="90px" class="demo-ruleForm">
                            <el-form-item label="真实姓名" prop="name">
                                <el-input v-model="ruleForm.name"></el-input>
                            </el-form-item>
                            <el-form-item label="身份证号" prop="Idcard">
                                <el-input v-model="ruleForm.Idcard"></el-input>
                            </el-form-item>
                            <el-form-item label="用户生日" required prop="birth">
                                <el-col :span="24">
                                    <el-form-item >
                                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birth" style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-form-item>
                            <el-form-item label="用户性别" prop="sex">
                                <el-radio-group v-model="ruleForm.sex">
                                    <el-radio label="男"></el-radio>
                                    <el-radio label="女"></el-radio>
                                    <el-radio label="保密"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm')">提交修改</el-button>
                                <el-button @click="resetForm('ruleForm')">重置</el-button>
                            </el-form-item>
                        </el-form>
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
        name: 'userinfo',
            data() {
            return {
                ruleForm: {
                    name: '',
                    Idcard: '',
                    sex: '',
                    birth: ''
                },
                defaultactive:'1-1',
                titlename:'个人资料',
                rules: {
                    name: [
                        {required: true, message: '请输入真实姓名', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    Idcard:[
                        {required: true, message: '请输入身份证号',trigger: 'blur' }
                    ],
                    sex:[
                        {required: true, message: '请选择性别',trigger: 'change' }
                    ],
                    birth:[
                        {type: 'date', required: true, message: '请选择时间',trigger: 'change' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                        if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        components:{userleft,menutree},
    }

</script>

<style lang="scss">
    .rightbox{
        float:left;
        padding-left:50px;
        border-left: solid 1px #e6e6e6;
        margin-left:-1px;
    }
    .personaldata{
        max-width:560px;
    }
    .toptips{
        margin-bottom:20px;
    }

</style>
<template>
    <div>
        <el-row type="flex" justify="center">
            <el-col :span="8">
                <el-form :model="fromDate" ref="loginBox">
                    <el-form-item label="姓名" :rules="userRules" prop="username">
                        <el-input v-model="fromDate.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" :rules="passRules" prop="password">
                        <el-input v-model="fromDate.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button v-on:click.native="login">提交</el-button>
                    </el-form-item>
                </el-form> 
            </el-col>   
        </el-row>
        
    </div>
</template>

<script>
    import {login} from './../../utils/request'

    export default {
        data() {
            return {
                fromDate: {
                    username: 'aaa',
                    password: ''
                },
                userRules: [{
                    required: true
                }],
                passRules: [{
                    required: true
                }]
            }
        },
        methods: {
            login(){
                this.$refs.loginBox.validate((isvalid, options) => {
                    if(isvalid){
                        this.$store.dispatch('getToken', {
                            data: this.fromDate,
                            notify: this.$notify,
                            router: this.$router
                        })
                    } else {
                        this.$notify({
                            title: '错误',
                            message: '亲爱的，请填写正确的姓名和密码',
                            type: 'error'
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
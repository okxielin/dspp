<template>
    <div class="origin-box">
        <el-upload class="avatar-uploader"
        action="https://localhost:8080/dsp-creative/creative/upload"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-col>
            <el-form ref="form" :model="form" label-width="90px">
                <el-form-item label="广告文案:">
                    <el-input v-model="form.name1"></el-input>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col>
            <el-form ref="form" :model="form" label-width="90px">
                <el-form-item label="监控连接:">
                    <el-input v-model="form.name2"></el-input>
                </el-form-item>
            </el-form>
        </el-col>
    </div>
</template>

<script>
    export default {
        name: "talSelected",
        data(){
            return {
                imageUrl: '',
            }
        },
        modths: {
            handleAvatarSuccess(res, file) {
                this.imageUrl ="http://localhost:9000/"+res.data+value
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg'
                const isLt2M = file.size / 1024 / 1024 < 2

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!')
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!')
                }
                return isJPG && isLt2M
            }
        }
    }
</script>

<style scoped>

</style>
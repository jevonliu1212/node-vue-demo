<template>
    <el-upload
      class="upload-demo"
      action="/upload/uploadfile"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :file-list="fileList">
      <el-button size="small" type="danger"><i class="el-icon-upload"></i>点击上传</el-button>
      <div slot="tip" class="el-upload__tip">请选择需要上传的文件</div>
    </el-upload>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      fileList: [],
      file: '',
      percentCompleted: 50
    }
  },
  computed: {
    style () {
      return {
        width: this.percentCompleted + '%'
      }
    }
  },
  methods: {
    async submit () {
      const formData = new FormData()
      formData.append('file', this.file)
      this.axios.post('/upload/uploadfile', formData, {'Content-Type': 'multipart/form-data'}).then(res => {
        console.log(res)
        this.$dialog.alert('success')
      }).catch(res => {
        this.$message.warning('系统异常')
      })
    },
    fileSelect () {
      let file = this.$refs.file.files[0]
      this.file = file
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning('xxx')
    },
    beforeRemove (file, fileList) {
      return this.$confirm('确定移除？')
    }
  }
}
</script>

<style lang="less">
.progress-wrap{
  width : 300px;
  p{
    width : 100%;
  }
  .progress{
    background-color: #c5c8ce;
    height: 20px;
    span{
      display: block;
      background-color: #19be6b;
      height: 100%;
      width: 0;
    }
  }
}

</style>

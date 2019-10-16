<template>
    <el-table :data="items" style="width: 100%" align='center'>
      <el-table-column label="文件" align='center' >
        <template slot-scope="scope">
          <div slot="reference" >
            <p>{{ scope.row }}</p>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" align='center'>
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {items: ['Foo', 'Bar']}
  },
  mounted () {
    const formData = new FormData()
    const self = this
    this.axios.post('/files/list', formData).then(res => {
      console.log('res=>', res)
      self.$data.items = res.data
    }).catch(res => {
      console.log('query error=='+JSON.stringify(res))
      this.$message.warning(res.message)
    })
  },
  methods: {
    query () {
      const formData = new FormData()
      this.axios.post('/files/list', formData).then(res => {
        console.log('res=>', res)
      }).catch(res => {
        console.log('query error')
        this.$message.warning('系统异常')
      })
    },
    handleDelete (index, row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
		let data = {"path":row};
        this.axios.post('/files/delete', data).then(res => {
          console.log(res)
          this.$message({
            showClose: true,
            message: '删除成功'
          })
        }).catch(res => {
        console.log('query error')
        this.$message.warning(res.message)
      })

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

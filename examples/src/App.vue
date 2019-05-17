<template>
  <div>
    <h3>Functional Button Examples</h3>
    <div>
      <h4>Defer Button</h4>
      <el-button @click="handleOpenDialog">Open DeferBtn Demo Dialog</el-button>
      <el-dialog title="Info" :visible.sync="dialogVisible" @close="dialogVisible = false">
        <p>I think it is good</p>
        <span slot="footer" class="dialog-footer">
          <el-button @click="handleCancel">No</el-button>
          <defer-btn ref="deferBtn" type="primary" :action="handleAgree">I agree</defer-btn>
        </span>
      </el-dialog>
    </div>
    <div>
      <h4>Continuous Button</h4>
      <span>{{ count }}</span>
      <continuous-btn type="primary" :action="handleAdd">Hold me</continuous-btn>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      dialogVisible: false,
      count: 0,
    }
  },
  methods: {
    handleOpenDialog() {
      this.dialogVisible = true
      this.$refs.deferBtn.start()
    },
    handleCancel() {
      this.$refs.deferBtn.clear()
      this.dialogVisible = false
      this.$message.info('Ok.. I will make it better😥')
    },
    handleAgree() {
      this.$message.success('Thank you🤗')
    },
    handleAdd() {
      this.count++
    },
  },
}
</script>

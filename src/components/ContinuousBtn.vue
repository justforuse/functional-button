<template>
  <el-button
    v-bind="$attrs"
    @click="handleAction"
    @mousedown.native="handleMouseDown"
    @mouseup.native="handleMouseUp"
    @mouseleave.native="handleMouseLeave"
  >
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </el-button>
</template>
<script>
export default {
  name: 'ContinuousBtn',
  props: {
    action: {
      type: Function,
      default: null
    },
    interval: {
      type: Number,
      default: 300
    }
  },
  data () {
    return {
      pressFlag: false,
      timeHandle: null
    }
  },
  methods: {
    handleAction () {
      this.action && this.action()
    },
    startPolling () {
      this.timeHandle = setInterval(() => {
        console.log('pressing...')
        this.handleAction()
      }, this.interval)
    },
    handleMouseDown () {
      this.pressFlag = true
      this.startPolling()
    },
    handleMouseUp () {
      this.pressFlag = false
      clearTimeout(this.timeHandle)
    },
    handleMouseLeave () {
      this.pressFlag = false
      clearTimeout(this.timeHandle)
    }
  }
}
</script>

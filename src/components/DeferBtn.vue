<template>
  <el-button
    v-bind="$attrs"
    @click="handleAdvanceAction"
  >
    <span v-if="$slots.default">
      <slot></slot>
      <span v-if="timeDelay">({{ timeDelay }}s)</span>
    </span>
  </el-button>
</template>
<script>
export default {
  name: 'DeferBtn',
  props: {
    action: {
      type: Function,
      default: null
    },
    delay: {
      type: Number,
      default: 3
    }
  },
  data () {
    return {
      timerHandle: null,
      timeDelay: this.delay,
      intervalHandle: null
    }
  },
  created () {
    // start loop
    this.start()
  },
  beforeDestroy () {
    this.clear()
  },
  methods: {
    start () {
      this.timeDelay = this.delay
      this.timerHandle = setTimeout(() => {
        this.doAction()
      }, this.delay * 1000)

      this.intervalHandle = setInterval(() => {
        if (this.timeDelay >= 1) {
          this.timeDelay -= 1
        } else {
          this.preAction()
        }
      }, 1000)
    },
    clear () {
      clearInterval(this.intervalHandle)
      clearTimeout(this.timerHandle)
      this.timeDelay = 0
    },
    doAction () {
      this.timeDelay = 0
      clearTimeout(this.timerHandle)
      this.action && this.action()
    },
    preAction () {
      clearInterval(this.intervalHandle)
    },
    handleAdvanceAction () {
      if (this.timeDelay) {
        this.preAction()
        this.doAction()
      }
    }
  }
}
</script>

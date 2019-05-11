import DeferBtn from './components/DeferBtn.vue'
import ContinuousBtn from './components/ContinuousBtn.vue'

const Components = [
  DeferBtn,
  ContinuousBtn
]

// Install the components
export function install (Vue) {
  Components.forEach((component) => {
    Vue.component(component.name, component)
  })
  /* -- Add more components here -- */
}

// Expose the components
export {
  DeferBtn,
  ContinuousBtn
  /* -- Add more components here -- */
}

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

// Plugin
const plugin = {
  /* eslint-disable no-undef */
  version: VERSION,
  install
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

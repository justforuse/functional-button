import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import FunctionalButton from '../../src/index'
Vue.config.productionTip = false
Vue.use(Element)
Vue.use(FunctionalButton)

const vm = new Vue({
  el: '#app',
  render: h => h(App)
})
Vue.use(vm)

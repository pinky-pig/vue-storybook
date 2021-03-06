import Vue from 'vue'
import App from './App.js'

Vue.config.productionTip = false

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element);

import '@/style/index.css'

new Vue({
  render: h => h(App),
}).$mount('#app')

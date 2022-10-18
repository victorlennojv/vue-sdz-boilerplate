import Vue from 'vue'
import App from './App.vue'
import store from './store'

import { VueCoeFeedback } from 'vue-coe-feedback'

Vue.use(VueCoeFeedback, store, { delay: 3000 })

export default new Vue({ store, render: h => h(App) }).$mount('#app')
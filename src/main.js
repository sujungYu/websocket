import Vue from 'vue'
import App from './App.vue'
// import WebSocket from './websocket'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // WebSocket
}).$mount('#app')

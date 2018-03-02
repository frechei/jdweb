import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.js'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

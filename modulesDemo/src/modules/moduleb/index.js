/**
 * Created by Administrator on 2018/4/22.
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies);
Vue.config.productionTip = false
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

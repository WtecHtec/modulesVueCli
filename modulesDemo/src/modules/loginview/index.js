/**
 * Created by Administrator on 2018/4/22.
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import HTTP from '@/utils/request'
 import 'element-ui/lib/theme-chalk/index.css'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies);
Vue.config.productionTip = false
Vue.use(ElementUI)
HTTP.defaults.withCredentials = true;
Vue.prototype.$http = HTTP
import Md5 from 'js-md5';// Md5加密
Vue.prototype.$md5 = Md5;
import global from '@/utils/global'
Vue.prototype.$global = global
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

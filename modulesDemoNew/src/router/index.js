import Vue from 'vue'
import Router from 'vue-router'
import index from '@/mudules/pc/pcHome'

// import list from '@/components/views/list'

import mobile from '@/mudules/mobile/mHome'

// import mobList from '@/components/mobile/mobList'

Vue.use(Router)
 let  router = new Router({
   routes: [

     { path: '/mobile', name: 'mobile', component: mobile },

     // { path: '/mobList', name: 'mobList', component: mobList },

     { path: '/', name: 'index', component: index },

     // { path: '/list', name: 'list', component: list }

   ]
})

if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {

  router.push({name:"mobile"})

}else {

  router.push({name: "index"})
}

export default  router;

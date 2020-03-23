import Vue from 'vue'
import Router from 'vue-router'
import SubModule1 from '../pages/sub-module1'
import Mainmodulea from '../pages/mainmodulea'
import Mainmoduleb from '../pages/mainmoduleb'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/sub-module1'
    },
    {
      path: '/sub-module1',
      name: 'subModule1',
      component: SubModule1
    },
    {
      path: '/mainmodulea',
      name: 'mainmodulea',
      component: Mainmodulea
    },
    {
      path: '/mainmoduleb',
      name: 'mainmoduleb',
      component: Mainmoduleb
    }

  ]
})

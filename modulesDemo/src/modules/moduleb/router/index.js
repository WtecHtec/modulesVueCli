import Vue from 'vue'
import Router from 'vue-router'
import SubModule1 from '../pages/sub-module1'
import SubModule2 from '../pages/sub-module2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/sub-moduleB'
    },
    {
      path: '/sub-moduleB',
      name: 'subModuleB',
      component: SubModule1
    },
    {
      path: '/sub-module2',
      name: 'subModule2',
      component: SubModule2
    }
  ]
})

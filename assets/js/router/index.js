import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HalloWorld.vue'
import Another from '../components/Another.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HalloWorld',
      component: HelloWorld
    },
    {
      path: '/another',
      name: 'Another',
      component: Another
    }
  ],
})

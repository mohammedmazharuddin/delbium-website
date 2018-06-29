import Vue from 'vue'
import Router from 'vue-router'
import Maps from '@/components/Maps'
import BadGateway from '@/components/BadGateway'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/maps',
      name: 'Maps',
      props: { page: 4 },
      component: Maps
    },
    {
      path: '/404',
      name: 'BadGateway',
      props: { page: 5 },
      component: BadGateway
    },
    {
      path: '*',
      props: { page: 5 },
      redirect: '/404'
    }
  ]
})

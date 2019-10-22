import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = {
  landing: 'landing'
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: routes.landing,
      component: () =>
        import(/* webpackChunkName: "landing" */ './views/Landing.vue'),
      meta: { isPrivate: false, showOverFooter: true, isResponsive: true }
    }
  ],
  scrollBehavior () {
    return { y: 0 }
  }
})

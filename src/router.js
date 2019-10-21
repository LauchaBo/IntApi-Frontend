import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = {
  home: 'home'
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: routes.home,
      component: () =>
        import(/* webpackChunkName: "home" */ './views/Home.vue'),
      meta: { isPrivate: false, showOverFooter: true, isResponsive: true }
    }
  ],
  scrollBehavior () {
    return { y: 0 }
  }
})

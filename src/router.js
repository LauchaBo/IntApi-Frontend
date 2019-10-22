import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = {
  landing: 'landing',
  login: 'login',
  register: 'register'
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
    },
    {
      path: '/login',
      name: routes.login,
      component: () =>
        import(/* webpackChunkName: "login" */ './views/Login.vue'),
      meta: { isPrivate: false, showOverFooter: true, isResponsive: true }
    },
    {
      path: '/register',
      name: routes.register,
      component: () =>
        import(/* webpackChunkName: "register" */ './views/Register.vue'),
      meta: { isPrivate: false, showOverFooter: true, isResponsive: true },
      props: true
    }
  ],
  scrollBehavior () {
    return { y: 0 }
  }
})

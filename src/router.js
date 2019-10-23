import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = {
  landing: 'landing',
  login: 'login',
  register: 'register',
  payments: 'payments',
  monthlySettlement: 'monthlySettlement',
  personalHome: 'personalHome',
  businessHome: 'businessHome',
  raiseLimits: 'raiseLimits'
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
    },
    {
      path: '/payments',
      name: routes.payments,
      component: () =>
        import(/* webpackChunkName: "payments" */ './views/Payments.vue'),
      meta: { isPrivate: true, showOverFooter: true, isResponsive: true }
    },
    {
      path: '/monthlySettlement',
      name: routes.monthlySettlement,
      component: () =>
        import(/* webpackChunkName: "monthlySettlement" */ './views/MonthlySettlement.vue'),
      meta: { isPrivate: false, showOverFooter: true, isResponsive: true }
    },
    {
      path: '/homePersonal',
      name: routes.homePersonal,
      component: () =>
        import(/* webpackChunkName: "homePersonal" */ './views/HomePersonal.vue'),
      meta: { isPrivate: false, showOverFooter: true, isResponsive: true }
    },
    {
      path: '/homeBusiness',
      name: routes.homeBusiness,
      component: () =>
        import(/* webpackChunkName: "homeBusiness" */ './views/HomeBusiness.vue'),
      meta: { isPrivate: false, showOverFooter: true, isResponsive: true }
    },
    {
      path: '/businessHome',
      name: routes.businessHome,
      component: () =>
        import(/* webpackChunkName: "businessHome" */ './views/BusinessHome.vue'),
      meta: { isPrivate: false, showOverFooter: true, isResponsive: true }
    },
    {
      path: '/raiseLimits',
      name: routes.raiseLimits,
      component: () =>
        import(/* webpackChunkName: "raiseLimits" */ './views/RaiseLimits.vue'),
      meta: { isPrivate: false, showOverFooter: true, isResponsive: true }
    }
  ],
  scrollBehavior () {
    return { y: 0 }
  }
})

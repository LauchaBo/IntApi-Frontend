<template lang="pug">
  .login-container.column.center
    router-link.main-button.self-start.m-left-3(:to='{ name: routes.landing }')
      | Volver
    .login.column.center.middle
      h1.title-xbig.m-bottom-3
        | Estado actual
      .row.center.middle
        button.main-button.m-right-3(type='button' @click='callDebitBanks')
          | Debitar de bancos
        button.main-button(type='button' @click='callPayBusinesses')
          | Pagar negocios
    table.headColor
      tr
        th
        | Nombre
        th
        | DNI
        th
        | Monto ($)
      tr(v-for='customer in monthlySettlement').bodyColor
        td
        | {{ customer.name }}
        td
        | {{ customer.id }}
        td
        | {{ customer.amount }}
</template>

<script>
import { mapActions, mapState } from 'vuex'

import { routes } from '../router'

export default {
  data() {
    return {
      routes
    }
  },
  created() {
    this.hydrateMonthlySettlement()
  },
  computed: {
    ...mapState({
      monthlySettlement: state => state.purchases.monthlySettlement
    })
  },
  methods: {
    ...mapActions([
      'hydrateMonthlySettlement',
      'debitBanks',
      'payBusinesses'
    ]),
    callDebitBanks() {
      this.debitBanks()
    },
    callPayBusinesses() {
      this.payBusinesses()
    }
  }
}
</script>

<style lang="scss" scoped>
th {
  padding: 15px;
  font-weight: bold;
}
td{
  padding: 15px;
}
table{
  width: 100%;
  margin-top: 100px;
}

.headColor{
background-color: #9D9D9D;
color: white;
font-weight: bold;
}

.bodyColor{
  background-color:#E3E3E3 ;
}

tr {
  font-weight: bold;
    border-bottom: 1px solid #ddd;
}
tr:hover{
  background-color: #9D9D9D;
}
</style>

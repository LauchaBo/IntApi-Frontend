<template lang="pug">
  .login-container.column.center
    router-link.main-button.self-start.m-left-3(:to='{ name: routes.landing }')
      | Volver
    .login.column.center.middle
      h1.title-xbig.m-bottom-3
        | Estado actual
      .row.center.middle.m-bottom-2
        button.main-button.m-right-3(type='button' @click='callDebitBanks')
          | Debitar de bancos
        button.main-button(type='button' @click='callPayBusinesses')
          | Pagar negocios
      p.text-medium(v-if='operationDone')
        | La operación ha sido realizada correctamente
      p.text-medium.red(v-if='showError')
        | Hubo un error al intentar realizar la operación
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

import { isError } from '../utils/api'
import { routes } from '../router'

export default {
  data() {
    return {
      routes,
      operationDone: '',
      showError: ''
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
    async callDebitBanks() {
      this.operationDone = false
      this.showError = false
      const response = await this.debitBanks()
      !isError(response.status) ? this.operationDone = true : this.showError = false
    },
    async callPayBusinesses() {
      this.operationDone = false
      this.showError = false
      const response = await this.payBusinesses()
      !isError(response.status) ? this.operationDone = true : this.showError = false
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

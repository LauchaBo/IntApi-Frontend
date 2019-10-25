<template lang="pug">
  .login-container.column.center
    router-link.main-button.self-start.m-left-3(:to='{ name: routes.landing }')
      | Volver
    .jumbotron
      h1.title-xbig
        | Total de ventas mensuales: ${{ homeBusiness.total }}
      .column.m-right-5
        .row
          | Operaciones mensuales: {{ homeBusiness.sales }}
    h1.title-big.self-start.m-bottom-5.m-top-5
      | Historial de ventas
    table.headColor
      tr
        th
        | Fecha
        th
        | Número de tarjeta
        th
        | Monto ($)
      tr(v-for='sale in homeBusiness.payments').bodyColor
        td
        | {{ sale.date }}
        td
        | {{ sale.cardNumber }}
        td
        | {{ sale.price }}

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
    this.hydrateHomeBusiness()
  },
  computed: {
    ...mapState({
      homeBusiness: state => state.customers.homeBusiness
    })
  },
  methods: {
    ...mapActions([
      'hydrateHomeBusiness'
    ])
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

<template lang="pug">
  .login-container.column.center
    router-link.main-button.self-start.m-left-3(:to='{ name: routes.landing }')
      | Volver
    .jumbotron
      h1.title-xbig
        | Estado personal
    router-link.main-button(:to='{ name: routes.raiseLimits }')
        | Aumentar mis límites &raquo
    .row
      .column.m-right-5
        | Consumos mensuales: ${{ homePersonal.total }}
      .column.m-right-5
        .row
          | Límite total: ${{ homePersonal.limit }}
        .row 
          | Límite en cuotas: ${{ homePersonal.financiedlimit }}
      .column.m-right-5
    h1.title-big.self-start.m-bottom-5.m-top-5
     | Historial de consumo
    table.headColor
      tr
        th
        | Fecha
        th
        | Descripción
        th
        | Monto ($)
      tr(v-for='payment in homePersonal.payments').bodyColor
        td
        | {{ payment.date }}
        td
        | {{ payment.description }}
        td
        | {{ payment.price }}

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
    this.hydrateHomePersonal()
  },
  computed: {
    ...mapState({
      homePersonal: state => state.customers.homePersonal
    })
  },
  methods: {
    ...mapActions([
      'hydrateHomePersonal'
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

<template lang="pug">
  .login-container.column.center
    router-link.main-button(:to='{ name: routes.landing }')
      | Volver
    .jumbotron
      h1.title-xbig
        | Estado personal
    router-link.main-button(:to='{ name: routes.raiseLimits }')
        | Aumentar mis límites &raquo
    .row
      .column.m-right-5
        | Consumos mensuales: ${{monthlyExpenses}}
      .column.m-right-5
        .row
          | Límite total: ${{totalLimit}}
        .row 
          | Límite en cuotas: ${{installmentsLimit}}
      .column.m-right-5
    h1.title-big.self-start.m-bottom-5.m-top-5
     | Historial de consumo
    //b-table(striped hover :items='customers')
    table.headColor
      tr
        th
        | Fecha
        th
        | Descripción
        th
        | Monto ($)
      tr(v-for='customer in customers').bodyColor
        td
        | {{customer.date}}
        td
        | {{customer.place}}
        td
        | {{customer.amount}}

</template>

<script>
import { routes } from '../router'

export default {
  data() {
    return {
      customers: [
        { date: '20/11/2019', place: 'Cafe Martínez', amount: 122333 },
        { date: '05/10/2019', place: 'Subway', amount: 45765 },
        { date: '01/10/2019', place: 'Super de los chicos', amount: 1234}
      ],
      installmentsLimit: 10000,
      totalLimit: 15000,
      monthlyExpenses: 20000,
      routes
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

<template lang="pug">
  .login-container.column.center
    router-link.main-button(:to='{ name: routes.landing }')
      | Volver
    .jumbotron
      h1.title-xbig
        | Total de ventas mensuales: ${{monthlySales}}
      .column.m-right-5
        .row
          | Operaciones mensuales: {{quantityOfMonthlySales}}
    h1.title-big.self-start.m-bottom-5.m-top-5
      | Historial de ventas
    //b-table(striped hover :items='sales')
    table.headColor
      tr
        th
        | Fecha
        th
        | Comprador
        th
        | Monto ($)
      tr(v-for='sale in sales').bodyColor
        td
        | {{sale.date}}
        td
        | {{sale.buyer}}
        td
        | {{sale.amount}}

</template>

<script>
import { routes } from '../router'
export default {
  data() {
    return {
      sales: [
        { date: '20/11/2019', buyer: 'Persona A', amount: 5000 },
        { date: '05/10/2019', buyer: 'Persona B cuota 1/6', amount: 300 },
        { date: '01/10/2019', buyer: 'Persona C', amount: 1234 }
      ],
      quantityOfMonthlySales: 153,
      monthlySales: 30000,
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

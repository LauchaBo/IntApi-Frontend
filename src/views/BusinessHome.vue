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
      .column.m-right-5
    h1.title-big.self-start.m-bottom-5.m-top-5
     | Historial de ventas
    b-table(striped hover :items='sales')
</template>

<script>
import { routes } from '../router'

export default {
  data() {
    return {
      sales: [
        { Fecha: '20/11/2019', Comprador: 'Persona A', Monto: 5000 },
        { Fecha: '05/10/2019', Comprador: 'Persona B cuota 2/6', Monto: 300 },
        { Fecha: '01/10/2019', Comprador: 'Persona C', Monto: 1234 }
      ],
      quantityOfMonthlySales: 153,
      monthlySales: 30000,
      routes
    }
  }
}
</script>

<template lang="pug">
  .login-container.column.center
    router-link.main-button(:to='{ name: routes.landing }')
      | Volver
    .jumbotron
      h1.title-xbig
        | Estado personal
      router-link.main-button(:to='{ name: routes.landing }')
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
    b-table(striped hover :items='customers')
</template>

<script>
import { routes } from '../router'

export default {
  data() {
    return {
      customers: [
        { Fecha: '20/11/2019', Establecimiento: 'Cafe Martínez', Monto: 122333 },
        { Fecha: '05/10/2019', Establecimiento: 'Subway', Monto: 45765 },
        { Fecha: '01/10/2019', Establecimiento: 'Super de los chicos', Monto: 1234}
      ],
      installmentsLimit: 10000,
      totalLimit: 15000,
      monthlyExpenses: 20000,
      routes
    }
  }
}
</script>

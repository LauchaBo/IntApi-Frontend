<template lang="pug">
  .login-container.column.center
    router-link.main-button(:to='{ name: routes.landing }')
      | Volver
    .login.column.start.middle
      h1.title-xbig
        | Estado actual
    table.headColor
      tr
        th
        | Nombre
        th
        | DNI
        th
        | Monto ($)
      tr(v-for='customer in customers').bodyColor
        td
        | {{customer.name}}
        td
        | {{customer.dni}}
        td
        | {{customer.amount}}
</template>

<script>
import { routes } from '../router'

export default {
  data() {
    return {
      customers: [
        { name: 'Damian Agasi', dni: '12345788', amount: 1000 },
        { name: 'Fernando Imparato', dni: '987655', amount: 543234 },
        { name: 'Damian Agasi', dni: '12345788', amount: 1000}
      ],
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

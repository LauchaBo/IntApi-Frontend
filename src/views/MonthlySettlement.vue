<template lang="pug">
  .login-container.column.center
    router-link.main-button(:to='{ name: routes.landing }')
      | Volver
    .login.column.start.middle
      h1.title-xbig
        | Estado actual
      b-table(striped hover :items='customers')
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

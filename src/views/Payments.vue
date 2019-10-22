<template lang="pug">
  .login-container.column.center.middle
    router-link.main-button(:to='{ name: routes.landing }')
      | Volver
    .login.column.start.middle
      h1.title-xbig
        | Realizar compra
      .row
        h1.title-medium.m-top-1.m-right-1
          | Monto
        input.input-border.m-bottom-2.m-right-2(
          type='number'
          v-model='amountBuy'
          placeholder='$$$'
        )
        h1.title-medium.m-top-1.m-right-1
          | Establecimiento
        select.input-border(
          v-model="valueSelect"
        )
          option(v-for='place in selectDropdown', :value='place.value')
            | {{ place.name }}
      button.main-button.self-end(type='button').m-left-15
        | Realizar compra
      h1.title-big
        | Pagar tarjeta
      .row
        h1.title-medium.m-top-1.m-right-2
          | Monto
        input.input-border.m-bottom-2(
          type='number'
          v-model='amountCreditCardPayment'
          placeholder='$$$'
        )
      button.main-button.self-end(type='button').m-left-15
          | Pagar tarjeta
</template>

<script>
import { routes } from '../router'

export default {
  data() {
    return {
      amountBuy: '',
      selectDropdown: [{ name: 'Escuela', value: 1 }, { name: 'Supermercado', value: 2 }, { name: 'Gimnasio', value:3 }],
      amountCreditCardPayment: '',
      valueSelect: 1,
      routes
    }
  }
}
</script>

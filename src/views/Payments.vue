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
          v-model='price'
          placeholder='$$$'
        )
        h1.title-medium.m-top-1.m-right-1
          | Establecimiento
        select.input-border(
          v-model="businessId"
        )
          option(v-for='place in selectDropdown', :value='place.value')
            | {{ place.name }}
      .column
        h1.title-medium
          | Datos de la tarjeta
        .row
          label.text-normal
            | Número
          input.input-border(
            placeholder='4545111144445555'
          )
          label.text-normal
            | Fecha de expiración
          input.input-border(
            placeholder='05/20'
          )
          label.text-normal
            | Código de seguridad
          input.input-border(
            placeholder='457'
          )
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
// import { mapActions } from 'vuex'

import { routes } from '../router'

export default {
  data() {
    return {
      selectDropdown: [{ name: 'Escuela', value: 1 }, { name: 'Supermercado', value: 2 }, { name: 'Gimnasio', value:3 }],
      amountCreditCardPayment: '',
      businessId: 1,
      routes
    }
  },
  methods: {
    // ...mapActions([
    //   'purchase'
    // ]),
    // updateValue(e) {
    //   this.changePurchaseField({ field: e.target.name, value: e.target.value })
    // },
    // createPurchase() {
    //   purchase()
    // }
  }
}
</script>

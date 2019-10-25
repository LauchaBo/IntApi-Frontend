<template lang="pug">
  .register-container.column.center.top
    router-link.main-button.self-start.m-left-3.m-bottom-5(:to='{ name: routes.homePersonal }')
      | Volver
    h1.title-big.m-bottom-3
      | Elige la tarjeta a la que quieres aplicar:
      .row.middle.center.m-top-5
        .radio.m-right-1
          input.radio-input(type='radio' name='creditCard' v-model='cardName' :value='"Gold"')
          .radio-fill
        label.text-small.m-right-2
          | Gold
        .radio.m-right-1
          input.radio-input(type='radio' name='creditCard' v-model='cardName' :value='"Platinum"')
          .radio-fill.
        label.text-small
          | Platinum
        .radio.m-left-2
          input.radio-input(type='radio' name='creditCard' v-model='cardName' :value='"Black"')
          .radio-fill
        label.text-small
          | Black
    .income.column.center.middle
      p.text-big.m-bottom-2
        | Nuevos ingresos:
      input.income-input.input-border.m-bottom-2(
        type='number'
        v-model='newIncome'
        placeholder='$$$'
      )
    button.main-button(type='button')
      | Quiero mi tarjeta!
</template>

<script>
import { routes } from '../router'

export default {
  data() {
    return {
      cardName: 'Platinum',
      newIncome: '',
      routes
    }
  }
}
</script>

<style lang="scss" scoped>
.income {
  width: 500px;
}
</style>

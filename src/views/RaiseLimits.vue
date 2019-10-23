<template lang="pug">
  .column.center.middle
    .register-container.column.start.middle
      h1.title-big.m-bottom-3
        | Elige la tarjeta a la que quieres aplicar:
        .row.middle.center
        .radio.m-right-1
          input.radio-input(type='radio' name='creditCard' v-model='cc' :value='"Gold"')
          .radio-fill
        label.text-small.m-right-2
          | Gold
        .radio.m-right-1
          input.radio-input(type='radio' name='creditCard' v-model='cc' :value='"Platinum"')
          .radio-fill
        label.text-small
          | Platinum
        .radio.m-right-1
          input.radio-input(type='radio' name='creditCard' v-model='cc' :value='"Black"')
          .radio-fill
        label.text-small
          | Black
      p.text-big
        | Nuevos ingresos:
      input.input-border.m-bottom-2(
        type='number'
        v-model='newIncome'
        placeholder='$$$'
      )
      button.main-button.self-end(type='button')
        | Quiero mi tarjeta!


</template>

<script>
export default {
  data() {
    return {
      cc: '',
      newIncome: ''
    }
  }
}
</script>

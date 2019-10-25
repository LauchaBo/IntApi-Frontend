<template lang="pug">
  .column.center.middle
    .register-container.column.start.middle
      h1.title-big.m-bottom-3
        | Completa tu perfil
      label.text-medium.m-bottom-1
        | Nombre
      input.input-border.input-border.m-bottom-2(
        type='text'
        name='name'
        @input='updateValue'
        placeholder='Escribe tu nombre'
      )
      label.text-medium.m-bottom-1(v-if="role === 'Personal'")
        | Apellido
      input.input-border.input-border.m-bottom-2(
        type='text'
        name='lastName'
        @input='updateValue'
        placeholder='Escribe tu apellido'
        v-if="role === 'Personal'"
      )
      label.text-medium.m-bottom-1(v-if="role === 'Personal'")
        | DNI
      input.input-border.input-border.m-bottom-2(
        type='number'
        name='customerId'
        @input='updateValue'
        placeholder='32458761'
        v-if="role === 'Personal'"
      )
      label.text-medium.m-bottom-1(v-if="role === 'Business'")
        | CUIT
      input.input-border.input-border.m-bottom-2(
        type='number'
        name='businessId'
        @input='updateValue'
        placeholder='3025478522'
        v-if="role === 'Business'"
      )
      label.text-medium.m-bottom-1
        | Email
      input.input-border.input-border.m-bottom-2(
        type='email'
        name='email'
        @input='updateValue'
        placeholder='nombre@mail.com'
      )
      label.text-medium.m-bottom-1
        | Fecha de nacimiento
      input.input-border.input-border.m-bottom-2(
        type='text'
        name='dateBirth'
        @input='updateValue'
        placeholder='Ingresa tu fecha de nacimiento'
      )
      .column
        h2.title-small.m-bottom-1
          | Dirección
        label.text-medium.m-bottom-1
          | Calle
      input.input-border.input-border.m-bottom-2(
        type='text'
        name='street'
        @input='updateValue'
        placeholder='Calle que aparece en tu documento'
      )
      .row.middle.center.m-bottom-2
        label.text-medium.m-right-1
          | Número
        input.input-border.input-border.m-right-2(
          type='text'
          name='number'
          @input='updateValue'
          placeholder='1356'
        )
        label.text-medium.m-right-1
          | Dpto
        input.input-border.input-border(
          type='text'
          name='apartment'
          @input='updateValue'
          placeholder='5A'
        )
      label.text-medium.m-bottom-1
        | Código postal
      input.input-border.input-border.m-bottom-2(
        type='number'
        name='postalCode'
        @input='updateValue'
        placeholder='Escribe tu código postal'
      )
      label.text-medium.m-bottom-1
        | País
      input.input-border.input-border.m-bottom-2(
        type='text'
        name='country'
        @input='updateValue'
        placeholder='País de residencia'
      )
      label.text-medium.m-bottom-1
        | Provincia
      input.input-border.input-border.m-bottom-2(
        type='text'
        name='province'
        @input='updateValue'
        placeholder='Provincia donde vives'
      )
      label.text-medium.m-bottom-1
        | Ciudad
      input.input-border.input-border.m-bottom-2(
        type='text'
        name='city'
        @input='updateValue'
        placeholder='Ciudad donde vives'
      )
      label.text-medium.m-bottom-1
        | Teléfono
      input.input-border.input-border.m-bottom-2(
        type='text'
        name='phone'
        @input='updateValue'
        placeholder='0111523658416'
      )
      label.title-small.m-bottom-1(v-if="role === 'Personal'")
        | Ingresos
      input.input-border.input-border.m-bottom-2(
        type='number'
        name='income'
        @input='updateValue'
        placeholder='Escribe tu sueldo neto'
        v-if="role === 'Personal'"
      )
      label.text-medium.m-bottom-1(v-if="role === 'Personal'")
        | Método de pago
      .row.middle.center.m-bottom-2(v-if="role === 'Personal'")
        .radio.m-right-1
          input.radio-input(
            type='radio'
            name='paymentMethod'
            :value='"cbu"'
            @click='updatePaymentMethod'
          )
          .radio-fill
        label.text-small.m-right-2
          | CBU
        .radio.m-right-1
          input.radio-input(
            type='radio'
            name='paymentMethod'
            :value='"cash"'
            @click='updatePaymentMethod'
          )
          .radio-fill
        label.text-small
          | Efectivo
      label.text-medium.m-bottom-1(v-if="role === 'Personal' && useCBU")
        | CBU
      input.input-border.input-border.m-bottom-2(
        type='number'
        name='cbu'
        @input='updateValue'
        placeholder='0002214635678764654'
        v-if="useCBU"
      )
      label.text-medium.m-bottom-1
        | Contraseña
      input.input-border.input-border.m-bottom-2(
        type='password'
        name='password'
        @input='updateValue'
        placeholder='Escribe tu contraseña'
      )
      label.text-medium.m-bottom-1
        | Repetir contraseña
      input.input-border.input-border.m-bottom-2(
        type='password'
        name='confirmPassword'
        @input='updateValue'
        placeholder='Repite la contraseña'
      )
      button.main-button.self-end(type='button' @click='saveRegister')
        | Guardar
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      useCBU: false
    }
  },
  methods: {
    ...mapActions([
      'changeNewUserField',
      'register'
    ]),
    updateValue(e) {
      this.changeNewUserField({ field: e.target.name, value: e.target.value })
    },
    saveRegister() {
      this.changeNewUserField({ field: 'type', value: this.role })
      this.register()
    },
    updatePaymentMethod(e) {
      this.updateValue(e)
      e.target.value === 'cbu' ? this.useCBU = true : this.useCBU = false
    }
  },
  props: { 
    role: { type: String, required: true, default: 'Personal' } 
  }
}
</script>

<style lang="scss" scoped>
.register-container {
  max-width: 500px;
  margin-bottom: 50px;
}
</style>

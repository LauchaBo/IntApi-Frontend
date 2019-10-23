<template lang="pug">
  .column.center.middle
    .login.column.start.middle
      h1.title-medium.m-bottom-3
        | Iniciar sesión
      p.text-big.m-bottom-1
        | Correo electrónico
      input.input-border.m-bottom-2(
        type='mail'
        name='email'
        placeholder='nombre@mail.com'
        @input='updateValue'
      )
      p.text-big.m-bottom-1
        | Contraseña
      input.input-border.m-bottom-2(
        type='password'
        name='password'
        placeholder='Ingresa tu contraseña'
        @input='updateValue'
      )
      .row.middle.center
        .radio.m-right-1
          input.radio-input(
            type='radio'
            name='type'
            :value='"Personal"'
            @click='updateValue'
          )
          .radio-fill
        label.text-small.m-right-2
          | Soy particular
        .radio.m-right-1
          input.radio-input(
            type='radio'
            name='type'
            :value='"Business"'
            @click='updateValue'
          )
          .radio-fill
        label.text-small
          | Soy empresa
      button.main-button.self-end(type='button' @click='loginUser')
        | Ingresar
</template>

<script>
import { mapActions } from 'vuex'
import router, { routes } from '../router'

export default {
  methods: {
    ...mapActions([
      'changeUserInfoField',
      'login'
    ]),
    updateValue(e) {
      this.changeUserInfoField({ field: e.target.name, value: e.target.value })
    },
    loginUser() {
      router.push({ name: routes.homeBusiness })
      // this.login()
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  min-width: 500px;
}
</style>

<template lang="pug">
  .column.center.middle
    .login.column.start.middle
      h1.title-medium.m-bottom-3
        | Iniciar sesión
      p.text-big.m-bottom-1
        | Correo electrónico
      input.input-border.m-bottom-2(
        type='mail'
        v-model='email'
        placeholder='nombre@mail.com'
      )
      p.text-big.m-bottom-1
        | Contraseña
      input.input-border.m-bottom-2(
        type='password'
        v-model='password'
        placeholder='Ingresa tu contraseña'
      )
      .row.middle.center
        .radio.m-right-1
          input.radio-input(type='radio' name='role' v-model='role' :value='"Personal"')
          .radio-fill
        label.text-small.m-right-2
          | Soy particular
        .radio.m-right-1
          input.radio-input(type='radio' name='role' v-model='role' :value='"Business"')
          .radio-fill
        label.text-small
          | Soy empresa
      button.main-button.self-end(type='button')
        | Ingresar
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      role: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  min-width: 500px;
}
</style>

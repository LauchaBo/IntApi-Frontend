<template lang="pug">
  .column.center.middle
    .register-container.column.start.middle
      h1.title-big.m-bottom-3
        | Completa tu perfil
      label.text-medium.m-bottom-1
        | Nombre
      input.input-border.name-input.m-bottom-2(
        type='text'
        name='firstName'
        :value='getFirstName'
        @input='updateValueVO'
        placeholder='Escribe tu nombre'
      )
      label.text-medium.m-bottom-1(v-if="role === 'Personal'")
        | Apellido
      input.input-border.name-input.m-bottom-2(
        type='text'
        name='lastName'
        :value='getLastName'
        @input='updateValueVO'
        placeholder='Escribe tu apellido'
        v-if="role === 'Personal'"
      )
      label.text-medium.m-bottom-1
        | Email
      input.input-border.name-input.m-bottom-2(
        type='email'
        name='email'
        :value='getEmail'
        @input='updateValueVO'
        placeholder='nombre@mail.com'
      )
      label.text-medium.m-bottom-1
        | Fecha de nacimiento
      input.input-border.name-input.m-bottom-2(
        type='text'
        name='birthDate'
        :value='getBirthDate'
        @input='updateValueVO'
        placeholder='Ingresa tu fecha de nacimiento'
      )
      .column
        h2.title-small.m-bottom-1
          | Dirección
        label.text-medium.m-bottom-1
          | Calle
      input.input-border.name-input.m-bottom-2(
        type='text'
        name='street'
        :value='getStreet'
        @input='updateValueVO'
        placeholder='Calle que aparece en tu documento'
      )
      .row.middle.center
        label.text-medium.m-bottom-1
          | Número
        input.input-border.name-input.m-bottom-2(
          type='text'
          name='streetNumber'
          :value='getStreetNumber'
          @input='updateValueVO'
          placeholder='1356'
        )
        label.text-medium.m-bottom-1
          | Dpto
        input.input-border.name-input.m-bottom-2(
          type='text'
          name='apartment'
          :value='getApartment'
          @input='updateValueVO'
          placeholder='5A'
        )
      label.text-medium.m-bottom-1
        | Código postal
      input.input-border.name-input.m-bottom-2(
        type='number'
        name='postalCode'
        :value='getPostalCode'
        @input='updateValueVO'
        placeholder='Escribe tu código postal'
      )
      label.text-medium.m-bottom-1
        | País
      input.input-border.name-input.m-bottom-2(
        type='text'
        name='country'
        :value='getCountry'
        @input='updateValueVO'
        placeholder='País de residencia'
      )
      label.text-medium.m-bottom-1
        | Provincia
      input.input-border.name-input.m-bottom-2(
        type='text'
        name='province'
        :value='getProvince'
        @input='updateValueVO'
        placeholder='Provincia donde vives'
      )
      label.text-medium.m-bottom-1
        | Ciudad
      input.input-border.name-input.m-bottom-2(
        type='text'
        name='city'
        :value='getCity'
        @input='updateValueVO'
        placeholder='Ciudad donde vives'
      )
      label.text-medium.m-bottom-1
        | Teléfono
      input.input-border.name-input.m-bottom-2(
        type='text'
        name='phone'
        :value='getPhone'
        @input='updateValueVO'
        placeholder='0111523658416'
      )
      label.text-medium.m-bottom-1(v-if="role === 'Personal'")
        | Ingresos
      input.input-border.name-input.m-bottom-2(
        type='text'
        name='firstName'
        :value='getFirstName'
        @input='updateValueVO'
        placeholder='Escribe tu nombre'
        v-if="role === 'Personal'"
      )
      label.text-medium.m-bottom-1
        | Contraseña
      input.input-border.name-input.m-bottom-2(
        type='password'
        name='password'
        :value='getPassword'
        @input='updateValueVO'
        placeholder='Escribe tu contraseña'
      )
      label.text-medium.m-bottom-1
        | Repetir contraseña
      input.input-border.name-input.m-bottom-2(
        type='password'
        name='confirmPassword'
        :value='getConfirmPassword'
        @input='updateValueVO'
        placeholder='Repite la contraseña'
      )
      button.main-button.self-end(type='button' @click='registerUser')
        | Guardar
</template>

<script>
export default {
  data() {
    return {

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

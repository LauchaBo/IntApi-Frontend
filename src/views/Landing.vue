<template lang="pug">
  .landing.row.middle.center
    router-link.main-button.m.right-3(:to='{ name: routes.register, params: { role: "Personal" } }')
      | Registro Personas
    router-link.main-button(:to='{ name: routes.register, params: { role: "Business" } }')
      | Registro Empresas
</template>

<script>
import { routes } from '../router'

export default {
  data() {
    return {
      routes
    }
  }  
}
</script>

<style lang="scss" scoped>

</style>

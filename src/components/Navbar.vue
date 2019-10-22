<template lang="pug">
  nav.navbar.row.space-between.middle
    router-link(:to='{ name: routes.landing }')
      .row.center.middle
        img.icon.m-right-1(src='../assets/logo.png' alt='Kimple')
        span.title-big
          | CreditAr
    router-link.main-button(type='button' :to='"/login"')
      | Ingresar
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
@import '../scss/variables/colors';

.navbar {
  padding: 10px;
  border-bottom: 1px solid $gray;
}

.icon {
  height: 50px;
}
</style>

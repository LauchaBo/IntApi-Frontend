<template lang="pug">
  nav.navbar.row.space-between.middle
    router-link(:to='{ name: routes.landing }')
      .row.center.middle
        img.icon.m-right-1(src='../assets/logo.png' alt='Kimple')
        span.title-big
          | CreditAr
    .row.center.middle
      router-link.text-big.blue.m-right-2(:to='{ name: routes.monthlySettlement }')
        | Liquidación
      router-link.main-button(:to='{ name: routes.login }')
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
@import '../scss/variables/z-indexes';

.navbar {
  padding: 10px;
  border-bottom: 1px solid $gray;
  position: fixed;
  width: 100%;
  z-index: $navbar;
  background-color: $white;
}

.icon {
  height: 50px;
}
</style>

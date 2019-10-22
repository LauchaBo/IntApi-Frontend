<template lang="pug">
  nav.navbar.row.space-between.middle
    router-link(:to='"/landing"')
      .row.center.middle
        img.icon.m-right-1(src='../assets/logo.png' alt='Kimple')
        span.title-big
          | CreditAr
    button.main-button(type='button')
      | Ingresar
</template>

<script>
export default {
  
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

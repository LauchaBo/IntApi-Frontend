<template lang="pug">
  .app-container
    navbar
    router-view.main-container
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: { Navbar }  
}
</script>

<style lang="scss">
@import './scss/application';
@import './scss/variables/sizes';

.main-container {
  min-height: calc(100vh - #{$footer-height});
  padding-top: $navbar-height;
}

.block-scroll {
  height: 100vh;
  overflow: hidden;
}

@media screen and (max-width: $mobile-break) {
  .main-container {
    padding-top: 65px;
  }
}

</style>

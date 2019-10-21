<template lang="pug">
  .app-container(:class='{ "block-scroll": isModalOpen }')
</template>

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

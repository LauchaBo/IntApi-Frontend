<template lang="pug">
  .landing-container.column.start.top
    .landing
      h1.title-xlbig.white.m-bottom-2
        | Tus mejores vacaciones <br> con CreditAR
      .row.start.middle
        router-link.main-button.m-right-4(:to='{ name: routes.register, params: { role: "Personal" } }')
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
.landing-container {
  background: url('../assets/landing.jpg') no-repeat;
  background-size: cover;
  padding: 300px 0 0 80px;
}

.landing {
  animation: fadein 3s;
}

@keyframes fadein {
  0% {
    opacity: 0;
    transform: translateX(100px)
  }
  100% {
   opacity: 1;
   transform: translateX(0)
  }
}
</style>

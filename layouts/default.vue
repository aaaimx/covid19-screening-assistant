<template>
  <v-app>
    <!-- <Toolbar /> -->
    <v-content>
      <!-- <loading /> -->
      <transition name="fade" mode="out-in">
        <nuxt />
      </transition>
      <ProjectDescription />
    </v-content>
    <Footer />
  </v-app>
</template>
<script>
export default {
  components: {
    Footer: () => import('@/components/core/Footer'),
    Toolbar: () => import('@/components/core/Toolbar')
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&family=Ubuntu:wght@700&display=swap');
body,
html {
  font-family: 'Roboto', sans-serif !important;
  font-size: 15px !important;
  font-weight: 300 !important;
}
strong {
  font-weight: 600 !important;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 300 !important;
  line-height: 1.1 !important;
  display: block !important;
}
p {
  font-size: 15px !important;
  font-weight: 300 !important;
  line-height: 23px !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

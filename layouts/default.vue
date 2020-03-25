<template>
  <v-app dark>
    <Toolbar />
    <v-content>
      <!-- <loading /> -->
      <transition name="fade" mode="out-in">
        <nuxt />
      </transition>
      <ProjectDescription />
      <base-bubble-2 style="transform: rotate(180deg) translate(-200px, -15%)" />
    </v-content>
    <Footer />
  </v-app>
</template>
<script>
export default {
  components: {
    Footer: () => import("@/components/core/Footer"),
    Toolbar: () => import("@/components/core/Toolbar")
  }
};
</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
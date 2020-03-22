<template>
  <v-app-bar
    v-scroll="onScroll"
    :color="isTransparent ? 'transparent' : '#F5F5F5'"
    app
    flat
  >
    <v-spacer />
    <SocialMedia />
  </v-app-bar>
</template>

<script>
export default {
  components: {
    SocialMedia: () => import('@/components/SocialMedia')
  },

  data: () => ({
    isTransparent: true
  }),

  methods: {
    onScroll () {
      this.isTransparent = window.pageYOffset < 200
    }
  }
}
</script>

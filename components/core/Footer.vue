<template>
  <v-footer height="88" class="justify-center" padless>
    <v-card class="flex" flat tile>
      <v-card-title>
        <strong class="subheading"
          >Get connected with us on social networks!</strong
        >

        <v-spacer></v-spacer>

        <social-media large />
      </v-card-title>

      <v-card-text class="py-2  text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  components: {
    SocialMedia: () => import("@/components/SocialMedia")
  }
};
</script>

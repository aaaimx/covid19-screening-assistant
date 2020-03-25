<template>
  <v-footer height="60" class="mt-2 justify-center text-xs-center d-block" :padless="padless">
    <v-divider></v-divider>
    <v-card flat tile width="100%" class="text-center">
      <v-card-text class="text-center">
        <v-btn v-for="icon in icons" :key="icon" class="mx-2 mb-2" icon>
          <v-icon size="18px">{{ icon }}</v-icon>
        </v-btn>
        <div>
          Copyright &copy; 2020
          -
          <b>Powered by</b>
          <a href="https://web.facebook.com/aaaimx">@aaaimx</a>
        </div>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-github", "mdi-facebook", "mdi-email", "mdi-phone"],
    items: ["default", "absolute", "fixed"],
    padless: true,
    variant: "default"
  }),
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    }
  }
};
</script>
<template>
  <v-footer
    class="justify-center text-xs-center d-block"
    :padless="padless"
  >
    <v-card flat tile width="100%" class="text-center">
      <v-card-text class="text-center">
        <v-btn
          v-for="link in links"
          :href="link.href"
          :key="link.icon"
          class="mx-2 mb-2"
          icon
        >
          <v-icon size="20px">{{ link.icon }}</v-icon>
        </v-btn>
        <div>
          Sitio desarrollado por
          <a href="https://www.aaaimx.org">@aaaimx</a> - Copyright &copy; 2020
        </div>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        href: 'https://github.com/aaaimx',
        icon: 'mdi-github'
      },
      {
        href: 'https://web.facebook.com/aaaimx/',
        icon: 'mdi-facebook'
      },
      {
        href: 'mailto:contact@aaaimx.org',
        icon: 'mdi-email'
      }
    ],
    items: ['default', 'absolute', 'fixed'],
    padless: true,
    variant: 'default'
  }),
  computed: {
    localAttrs () {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    }
  }
}
</script>

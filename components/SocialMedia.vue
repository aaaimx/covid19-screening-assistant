<template>
  <div>
    <v-btn v-for="icon in items" :key="icon.name" class="mx-4" icon>
      <v-icon size="24px">{{ icon.icon }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    large: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ],
    items: [
      {
        name: "Facebook",
        icon: "mdi-facebook"
      },
      {
        name: "Email",
        icon: "mdi-email"
      },
      {
        name: "Phone",
        icon: "mdi-phone"
      }
    ]
  })
};
</script>

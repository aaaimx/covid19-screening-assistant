<template>
  <v-app-bar v-scroll="onScroll" :color="'transparent'" app flat>
    <v-row justify="center">
      <v-dialog v-model="dialog" scrollable width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Feeling cuantifiers</span>
          </v-card-title>

          <v-card-text style="height: 300px;">
            <v-radio-group v-model="dialogm1" column>
            </v-radio-group>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
        </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <v-spacer />

    <v-btn icon>
      <v-icon @click="dialog = true">mdi-help</v-icon>
    </v-btn>

    <!-- <SocialMedia /> -->
  </v-app-bar>
</template>

<script>
export default {
  components: {
    SocialMedia: () => import('@/components/SocialMedia')
  },

  data: () => ({
    isTransparent: true,
    dialogm1: '',
    dialog: false
  }),

  methods: {
    onScroll () {
      this.isTransparent = window.pageYOffset < 200
    }
  }
}
</script>

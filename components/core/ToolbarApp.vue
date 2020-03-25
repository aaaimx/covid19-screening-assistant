<template>
  <v-app-bar v-scroll="onScroll" :color="'transparent'" app flat>
    <v-row justify="center">
      <v-dialog v-model="dialog" scrollable width="500px">
        <v-card outlined>
          <v-card-title>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="headline"
                  >Feeling cuantifiers</v-list-item-title
                >
                <v-list-item-subtitle
                  >Lorem, ipsum dolor similique porro ducimus
                  explicabo.</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-card-title>

          <v-card-text>
            <v-card class="mx-auto" flat outlined>
              <v-list class="transparent">
                <v-list-item v-for="item in forecast" :key="item.day">
                  <v-list-item-title>{{ item.day }}</v-list-item-title>

                  <v-list-item-icon>
                    <!-- <v-icon>{{ item.icon }}</v-icon> -->
                    <img width="30px" :src="'/feelings/' + item.icon" alt />
                  </v-list-item-icon>

                  <v-list-item-subtitle class="text-right">
                    {{ item.temp }}
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>
            </v-card>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false"
              >I agree</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <v-spacer />

    <v-btn icon>
      <v-icon @click="dialog = true">mdi-help-circle-outline</v-icon>
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
    dialog: false,
    labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
    time: 0,
    forecast: [
      {
        day: 'Nada',
        icon: '1.svg',
        temp: '1'
      },
      {
        day: 'Poco',
        icon: '2.svg',
        temp: '2'
      },
      { day: 'Moderado', icon: '3.svg', temp: '3' },
      { day: 'Mucho', icon: '4.svg', temp: '4' }
    ]
  }),

  methods: {
    onScroll () {
      this.isTransparent = window.pageYOffset < 200
    }
  }
}
</script>

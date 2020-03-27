<template>
  <v-card flat tile>
    <v-app-bar app fixed>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>Coronavirus (Covid-19)</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-row justify="center">
        <v-dialog v-model="dialog" scrollable width="500px">
          <v-card outlined>
            <v-card-title>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="headline"
                    >Cuantificador</v-list-item-title
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
                      <img
                        width="30px"
                        :src="
                          '/covid19-screening-assistant/feelings/' + item.icon
                        "
                        alt
                      />
                    </v-list-item-icon>

                    <v-list-item-subtitle class="text-right">{{
                      item.temp
                    }}</v-list-item-subtitle>
                  </v-list-item>
                </v-list>

                <v-divider></v-divider>
              </v-card>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false"
                >Cerrar</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>

      <v-spacer />

      <v-btn icon>
        <v-icon @click="dialog = true">mdi-help</v-icon>
      </v-btn>
    </v-app-bar>
  </v-card>
</template>
<script>
import LocaleChanger from '@/components/core/LocaleChanger'
import ResizeText from 'vue-resize-text'

export default {
  name: 'Toolbar',
  components: {
    LocaleChanger
  },
  directives: {
    ResizeText
  },
  data () {
    return {
      sidebar: false,
      isTransparent: true,
      dialogm1: '',
      dialog: false,
      labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
      time: 0,
      
    }
  },
  computed: {
    adminItems () {
      return [
        {
          title: "this.$t('adminItems.CITIES')",
          link: 'admin-cities',
          icon: 'mdi-city',
          class: 'btnAdminCities'
        },
        {
          title: "this.$t('adminItems.USERS')",
          link: 'admin-users',
          icon: 'mdi-account-supervisor',
          class: 'btnAdminUsers'
        }
      ]
    },
    menuItems () {
      return [
        {
          title: "this.$t('menuItems.HOME')",
          link: 'landing',
          icon: 'mdi-home'
        },
        {
          title: "this.$t('menuItems.ABOUT')",
          link: 'about',
          icon: 'mdi-help-circle-outline',
          class: 'btnAbout'
        },
        {
          title: "this.$t('menuItems.LOGIN')",
          link: 'login',
          icon: 'mdi-lock',
          class: 'btnLogin'
        },
        {
          title: "this.$t('menuItems.SIGNUP')",
          link: 'signup',
          icon: 'mdi-plus-circle-outline',
          class: 'btnLogin'
        }
      ]
    }
  },
  methods: {
    userLogout () {
      this.$store.dispatch('userLogout')
    }
  }
}
</script>

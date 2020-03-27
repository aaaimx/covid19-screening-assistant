<template>
  <div>
    <v-row justify="center">
      <v-btn
        color="secondary"
        class="ma-2"
        large
        rounded
        outlined
        @click="dialog = true"
      >
        Iniciar Asistente
      </v-btn>
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <v-toolbar flat dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Síntomas</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn icon>
                <v-icon @click="help = true">mdi-help</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <v-list three-line subheader>
              <v-list-item>
                <v-list-item-content>
                  <!-- <v-list-item-title>Content filtering</v-list-item-title>
                  <v-list-item-subtitle
                    >Set the content filtering level to restrict apps that can
                    be downloaded</v-list-item-subtitle
                  >-->
                  <Form />
                </v-list-item-content>
              </v-list-item>
              <!-- <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Password</v-list-item-title>
                  <v-list-item-subtitle
                    >Require password for purchase or use password to restrict
                    purchase</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item> -->
            </v-list>
          </v-card-text>

          <div style="flex: 1 1 auto;"></div>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="help" scrollable width="500px">
        <v-card outlined>
          <v-card-title>
            Cuantificadores
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
                        '/covid-19-assistant/feelings/' + item.icon
                      "
                      alt
                    />
                  </v-list-item-icon>

                  <v-list-item-subtitle class="text-right">{{
                    item.temp
                  }}</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="help = false"
              >Cerrar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
export default {
  components: { Form: () => import('@/components/Form') },
  data () {
    return {
      dialog: true,
      help: false,
      notifications: false,
      sound: true,
      widgets: false,
      forecast: [
        { day: 'Nada', icon: '1.svg', temp: '1' },
        { day: 'Poco', icon: '2.svg', temp: '2' },
        { day: 'Moderado', icon: '3.svg', temp: '3' },
        { day: 'Mucho', icon: '4.svg', temp: '4' }
      ]
    }
  }
}
</script>

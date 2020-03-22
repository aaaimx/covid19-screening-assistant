<template>
  <v-container>
    <v-form ref="form">
      <!-- <v-text-field required outline flat label="Nombre completo">
      </v-text-field> -->

      <v-subheader class="pl-0"> 1. ¿Cuál es tu temperatura? (°C)</v-subheader>
      <v-slider :thumb-size="20" thumb-label="always"></v-slider>

      <v-subheader class="pl-0"
        >2. ¿Cómo calificarías tu dolor de cabeza?
      </v-subheader>
      <v-slider :tick-labels="seasons" min="0" max="3" ticks="always">
      </v-slider>
      <br />
      <v-subheader class="pl-0"
        >3. ¿Cómo calificarías tu dolor de cuerpo?
      </v-subheader>
      <v-slider :tick-labels="seasons" min="0" max="3" ticks="always">
        <template v-slot:thumb-label="props">
          <v-icon dark>
            {{ season(props.value) }}
          </v-icon>
        </template>
      </v-slider>

      <v-subheader class="pl-0"
        >4. ¿Cómo calificarías tu fatiga o debilidad?</v-subheader
      >
      <v-slider v-model="value" step="10" ticks></v-slider>

      <v-subheader class="pl-0"
        >5. ¿Qué tan tapada sientes la nariz?</v-subheader
      >

      <v-slider v-model="value" step="10" ticks="always"></v-slider>

      <v-subheader class="pl-0">6. ¿Qué tanto estornudas?</v-subheader>

      <v-slider
        v-model="value"
        thumb-label="always"
        :tick-labels="satisfactionEmojis"
        step="10"
        ticks="always"
      ></v-slider>

      <!--  -->
      <v-subheader class="pl-0"
        >7. ¿Qué tan irritada sientes la garganta?
      </v-subheader>
      <v-slider :tick-labels="seasons" min="0" max="3" ticks="always">
      </v-slider>

      <v-subheader class="pl-0">8. ¿Qué tanta tos tienes? </v-subheader>
      <v-slider :tick-labels="seasons" min="0" max="3" ticks="always">
      </v-slider>

      <v-subheader class="pl-0"
        >9. ¿Qué tanto se te dificulta respirar?
      </v-subheader>
      <v-slider :tick-labels="seasons" min="0" max="3" ticks="always">
      </v-slider>

      <v-subheader class="pl-0">10. ¿Qué tanto escurrimiento nasal tienes?</v-subheader>
      <v-slider :tick-labels="seasons" min="0" max="3" ticks="always">
      </v-slider>

       <v-subheader class="pl-0">11. ¿Qué tanta diarrea presentas? </v-subheader>
      <v-slider :tick-labels="seasons" min="0" max="3" ticks="always">
      </v-slider>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    slider: 1,
    value: 10,
    satisfactionEmojis: [
      "😭",
      "😢",
      "☹️",
      "🙁",
      "😐",
      "🙂",
      "😊",
      "😁",
      "😄",
      "😍"
    ],
    seasons: ["Poco", "Regular", "Mucho", "Demasiado"],
    icons: ["mdi-snowflake", "mdi-leaf", "mdi-fire", "mdi-water"]
  }),

  methods: {
    season(val) {
      return this.icons[val];
    }
  }
};
</script>

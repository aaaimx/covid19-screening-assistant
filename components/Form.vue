<template>
  <v-container style="max-height: 500px" class="overflow-y-auto">
    <!-- <v-text-field required outline flat label="Nombre completo">
      </v-text-field>-->

    <v-subheader class="pl-0">1. ¿Cuál es tu temperatura? (°C)</v-subheader>
    <v-slider
      :thumb-size="20"
      min="35"
      max="45"
      ticks="always"
      thumb-label="always"
    >
      <template v-slot:prepend>
        <img width="30px" :src="'/symptoms/1.svg'" alt />
      </template>
    </v-slider>
    <div v-for="(question, index) in questions" :key="index">
      <v-subheader class="pl-0">{{ question }}</v-subheader>
      <v-slider :tick-labels="seasons" min="0" max="3" ticks="always">
        <template v-slot:prepend>
          <img width="30px" :src="'/symptoms/' + (index + 2) + '.svg'" alt />
        </template>

        <template v-slot:thumb-label="props">
          <!-- <v-icon dark>
            {{ season(props.value) }}
              </v-icon> -->
          <img width="30px" :src="'/feelings/' + season(props.value)" alt />
        </template>
      </v-slider>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    scales: [1, 2, 3, 4],
    slider: 1,
    e6: 1,
    value: 10,
    questions: [
      '¿Cómo calificarías tu dolor de cabeza?',
      '¿Cómo calificarías dolores en tu cuerpo?',
      '¿Cómo calificarías tu fatiga o debilidad?',
      '¿Qué tan tapada sientes la nariz?',
      '¿Qué tanto estornudas?',
      '¿Qué tan irritada sientes la garganta?',
      '¿Qué tanta tos tienes?',
      '¿Qué tanto se te dificulta respirar?',
      '¿Qué tanto escurrimiento nasal tienes?',
      '¿Qué tanta diarrea presentas?'
    ],
    satisfactionEmojis: [
      '😭',
      '😢',
      '☹️',
      '🙁',
      '😐',
      '🙂',
      '😊',
      '😁',
      '😄',
      '😍'
    ],
    seasons: ['Nada', 'Poco', 'Moderado', 'Mucho'],
    icons: ['mdi-snowflake', 'mdi-leaf', 'mdi-fire', 'mdi-water'],
    svg: [0, 1, 2, 3, 4, 5, 6, 7, 8]
  }),

  methods: {
    season (val) {
      return this.svg[val] + '.svg'
    }
  }
}
</script>

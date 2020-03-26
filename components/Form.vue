<template>
  <v-container style="max-height: 500px" class="overflow-y-auto">
    <!-- <v-text-field required outline flat label="Nombre completo">
    </v-text-field>-->
    <v-subheader class="pl-0">1. ¿Cuál es tu temperatura? (°C)</v-subheader>
    <v-slider
      :tick-labels="['36°', '37°', '38°', '40°+']"
      min="1"
      max="4"
      v-model="temperature"
    >
      <template v-slot:prepend>
        <img
          width="30px"
          :src="'/covid19-screening-assistant/symptoms/1.svg'"
          alt
        />
      </template>
    </v-slider>
    <div v-for="(question, index) in questions" :key="index">
      <v-subheader class="pl-0">
        {{ index + 2 }}. {{ question.text }}</v-subheader
      >
      <v-slider
        :tick-labels="seasons"
        v-model="question.value"
        min="1"
        max="4"
        ticks="always"
      >
        <template v-slot:prepend>
          <img
            width="30px"
            :src="
              '/covid19-screening-assistant/symptoms/' + (index + 2) + '.svg'
            "
            alt
          />
        </template>

        <template v-slot:thumb-label="props">
          <!-- <v-icon dark>
            {{ season(props.value) }}
          </v-icon>-->
          <img
            width="30px"
            :src="
              '/covid19-screening-assistant/feelings/' + season(props.value)
            "
            alt
          />
        </template>
      </v-slider>
    </div>
    <v-btn @click.native="sendForm()" depressed rounded outlined class="mt-4"
      >Diagnostic</v-btn
    >
    <v-row justify="center">

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Diagnostic</v-card-title>

        <v-card-text>
          Es probable que tengas <b>{{ diseases[diagnosis] }}</b>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = 0"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

  </v-container>
</template>

<style>
div.v-slider__tick-label {
  font-size: 14px;
}
</style>

<script>
import axios from 'axios'
const config = {
  mode: 'cors',
  credentials: 'same-origin',
  timeout: 20000,
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://127.0.0.1:5000'
      : 'https://covid19-assistant.herokuapp.com',
  headers: {
    post: { 'Content-Type': 'application/json' }
  }
}
const api = axios.create(config)
export default {
  data: () => ({
    scales: [36.66, 37.33, 38.44, 40],
    diseases: ['', 'Alegria', 'Gripa', 'Resfriado', 'Coronavirus'],
    diagnosis: 2,
    dialog: false,
    temperature: 1,
    questions: [
      { text: '¿Cómo calificarías tu dolor de cabeza?', value: 1 },
      { text: '¿Cómo calificarías dolores en tu cuerpo?', value: 1 },
      { text: '¿Cómo calificarías tu fatiga o debilidad?', value: 1 },
      { text: '¿Qué tan tapada sientes la nariz?', value: 1 },
      { text: '¿Qué tanto estornudas?', value: 1 },
      { text: '¿Qué tan irritada sientes la garganta?', value: 1 },
      { text: '¿Qué tanta tos tienes?', value: 1 },
      { text: '¿Qué tanto se te dificulta respirar?', value: 1 },
      { text: '¿Qué tanto escurrimiento nasal tienes?', value: 1 },
      { text: '¿Qué tanta diarrea presentas?', value: 1 }
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
  // created () {
  //   this.sendForm()
  // },
  methods: {
    season (val) {
      return this.svg[val] + '.svg'
    },
    async sendForm () {
      const res = await api.post('/diagnosis', {
        values: [this.temperature, ...this.questions.map(q => q.value)]
      })
      console.log(res.data)
      this.diagnosis = res.data.diagnosis
      this.dialog = true
    }
  }
}
</script>

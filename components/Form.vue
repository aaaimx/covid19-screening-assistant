<template>
  <v-layout justify-center>
    <!-- <v-flex hidden-sm-and-down md4>
      <v-img
        src="https://wholelifestylenutrition.com/wp-content/uploads/Flu-2.jpg"
        height="100vh"
      />
    </v-flex> -->

    <!-- <v-flex xs12 md12>
      <v-layout align-center justify-center> -->
    <v-flex xs12 md8>
      <div
        class="mt-4"
        v-for="(question, index) in questions.slice(start, end)"
        :key="index"
      >
        <p class="pl-0 is-size-6 font-weight-bold">
          {{ question.text }}
        </p>
        <v-slider
          v-if="question.tmp"
          :tick-labels="['36°', '37.3°', '38.7°', '40°+']"
          min="1"
          max="4"
          v-model="question.value"
        >
          <template v-slot:prepend>
            <img
              width="30px"
              :src="$store.state.base + '/symptoms/1.svg'"
              alt
            />
          </template>
        </v-slider>

        <v-slider
          v-else
          :tick-labels="seasons"
          v-model="question.value"
          min="1"
          max="4"
          ticks="always"
        >
          <template v-slot:prepend>
            <img
              width="30px"
              :src="$store.state.base + '/symptoms/' + (index + 2) + '.svg'"
              alt
            />
          </template>

          <template v-slot:thumb-label="props">
            <!-- <v-icon dark>
            {{ season(props.value) }}
          </v-icon>-->
            <img
              width="30px"
              :src="$store.state.base + '/feelings/' + season(props.value)"
              alt
            />
          </template>
        </v-slider>
      </div>
      <!-- <v-btn @click.native="sendForm()" depressed rounded outlined class="mt-4"
        >Diagnosticar</v-btn
      > -->
      <v-row justify="center">
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="headline">Diagnóstico</v-card-title>

            <v-card-text>
              Es probable que tengas <b>{{ diseases[diagnosis] }}</b>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = 0">
                OK
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <!-- </v-flex>
      </v-layout> -->
    </v-flex>
  </v-layout>
</template>

<style>
div.v-slider__tick-label {
  font-size: 12px;
}
.step-content {
  padding: 0rem;
}
</style>

<script>
import { mapState } from 'vuex'
export default {
  props: ['start', 'end', 'questions'],
  data: () => ({
    scales: [36, 37.3, 38.7, 40],
    diseases: ['', 'Alergia', 'Coronavirus', 'Gripa', 'Resfriado'],
    diagnosis: 2,
    dialog: false,
    seasons: ['Nada', 'Poco', 'Moderado', 'Mucho'],
    svg: [0, 1, 2, 3, 4, 5, 6, 7, 8]
  }),
  methods: {
    season (val) {
      return this.svg[val] + '.svg'
    }
  }
}
</script>

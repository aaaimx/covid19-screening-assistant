<template>
  <div>
    <v-row justify="center">
      <v-btn
        color="secondary"
        class="ma-2"
        elevation="4"
        large
        rounded
        @click="dialog = true"
      >
        INICIAR ASISTENTE
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
            <v-btn
              icon
              dark
              @click=";(dialog = false), $store.commit('RESET_ASSISTANT')"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title class="font-weight-bold">Asistente para Diagnóstico</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <!-- <v-btn icon>
                <v-icon @click="help = true">mdi-help</v-icon>
              </v-btn> -->
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <section v-show="showResult" class="hero is-bold is-small">
              <!-- Hero head: will stick at the top -->
              <!-- <div class="hero-head">
                <nav class="navbar">
                  <div class="container">
                    <div class="navbar-brand">
                      <a v-if="!covid" class="button is-info">
                        <span class="icon">
                          <i class="mdi mdi-thumb-up"></i>
                        </span>
                        <span class="font-weight-bold"
                          >BAJA PROBABILIDAD DE RIESGO
                        </span>
                      </a>
                      <a v-else class="button is-danger">
                        <span class="icon">
                          <i class="mdi mdi-information"></i>
                        </span>
                        <span class="font-weight-bold"
                          >RIESGO DE EXPOSICIÓN
                        </span>
                      </a>
                    </div>
                  </div>
                </nav>
              </div> -->

              <!-- Hero content: will be in the middle -->
              <div class="hero-body">
                <div class="has-text-centered">
                  <b-message type="is-info">
                    <template v-if="!covid">
                      <h1 class="title is-3">
                        Tus síntomas parecen estar más asociados con aquellos
                        presentados en casos de
                        <b>{{ diseases[diagnosis] }}</b
                        >.
                      </h1>
                      <h2 class="subtitle mt-2">
                        Sin embargo, te recomendamos revisar los síntomas de
                        estas condiciones en <br />
                        <a
                          href="https://salud.nih.gov/articulo/resfrio-gripe-o-alergia/"
                          >https://salud.nih.gov/articulo/resfrio-gripe-o-alergia/ </a
                        >. <br />
                        Si sospechas estar contagiado de <b>COVID-19</b>, acorde
                        a las disposiciones oficiales, <br />
                        te recomendamos <b>quedarte en casa</b>, revisar los
                        síntomas en
                        <br />
                        <a href="https://coronavirus.gob.mx/"
                          >https://coronavirus.gob.mx/
                        </a>
                        y comunicarte al teléfono <b>800 00 44 800 </b> <br />
                        o con algún profesional de la salud vía telefónica.
                      </h2>
                    </template>
                    <template v-else>
                      <h1 class="title is-3">
                        Tus síntomas son similares con aquellos presentados en
                        algunos casos de <b>COVID-19</b>.
                      </h1>
                      <h2 class="subtitle mt-2">
                        Sin embargo, te recomendamos revisar una lista más
                        completa de los síntomas asociados a esta condición en
                        <br />
                        <a
                          href="https://salud.nih.gov/articulo/resfrio-gripe-o-alergia/"
                          >https://salud.nih.gov/articulo/resfrio-gripe-o-alergia/ </a
                        >. <br />
                        Te recomendamos <b>quedarte en casa</b>, revisar los
                        síntomas en
                        <br />
                        <a href="https://coronavirus.gob.mx/"
                          >https://coronavirus.gob.mx/
                        </a>
                        y comunicarte al teléfono <b>800 00 44 800 </b> <br />
                        o con algún profesional de la salud vía telefónica.
                      </h2>
                    </template>
                  </b-message>

                  <div class="experience">
                    <div
                      class="title is-size-5 has-text-info has-text-weight-bold"
                    >
                      Independientemente del diagnóstico, si:
                    </div>
                    <div class="item">
                      <div class="is-size-5">
                        La frecuencia de tu respiración es mayor a

                        <b>30 respiraciones por minuto</b>
                      </div>
                      <br />
                      <div class="is-size-5 has-text-weight-bold">O</div>
                      <br />
                    </div>
                    <div class="item">
                      <div class="is-size-5">
                        presentas dificultad para
                        <b>respirar, comer o mantenerte despierto,</b>
                      </div>
                      <br />
                      <div class="is-size-5 has-text-weight-bold">Y/O</div>
                      <br />
                    </div>
                    <div class="item">
                      <div class="is-size-5">
                        presentas
                        <b>
                          <a
                            href="https://medlineplus.gov/spanish/ency/article/003394.htm
"
                            >llenado capilar</a
                          >
                          de más de 5 segundos</b
                        >
                        <br />
                        <b>Y/O</b> tienes dos o más de los siguientes:
                      </div>
                      <br />
                      <ul style="list-style:disc;">
                        <li class="has-text-weight-bold">
                          — Más de 65 años o menos de 5 años
                        </li>
                        <li class="has-text-weight-bold">
                          — Fiebre mayor a 38°C
                        </li>
                        <li class="has-text-weight-bold">
                          — Tos seca persistente
                        </li>
                        <li class="has-text-weight-bold">
                          — Dificultad leve o moderada para respirar
                        </li>
                      </ul>
                    </div>
                    <br />
                    <div class="item">
                      <div class="is-size-5">
                        es necesario que te comuniques al teléfono
                        <b>800 00 44 800 </b> lo antes posible, <br />
                        debido a que te encuentras en una situación más
                        vulnerable.
                      </div>
                    </div>
                    <br />
                    <div class="item">
                      <div class="is-size-5">
                        Te recomendamos también reforzar medidas de prevención
                        como:
                      </div>
                      <br />
                      <ul style="list-style:disc;">
                        <li class="has-text-weight-bold">
                          — Lavar tus manos con agua y jabón
                        </li>
                        <li class="has-text-weight-bold">
                          — Toser o estornudar en un pañuelo desechable o con el
                          ángulo interno del codo
                        </li>
                        <li class="has-text-weight-bold">
                          — Usar gel antibacterial con alcohol al 70%
                        </li>
                        <li class="has-text-weight-bold">
                          — Evitar tocarte la boca, nariz y los ojos
                        </li>
                        <li class="has-text-weight-bold">
                          — Limpiar las superficies con jabón y cloro
                        </li>
                      </ul>
                    </div>
                    <br />
                    <!-- Hero footer: will stick at the bottom -->
                    <div class="item">
                      <div class="is-size-5">
                        Sigue la información publicada por la
                        <b>Secretaría de Salud </b> en:
                      </div>
                      <br />
                      <ul>
                        <li>
                          <strong>Twitter:</strong>
                          <a href="https://twitter.com/SSalud_mx"
                            >@SSalud_mx
                          </a>
                        </li>
                        <li>
                          <strong>Facebook:</strong>
                          <a
                            href="https://web.facebook.com/SecretariadeSaludMX/"
                            >SecretariadeSaludMX</a
                          >
                        </li>
                        <li>
                          <strong>Instagram:</strong>
                          <a href="https://www.instagram.com/ssalud_mx/"
                            >ssalud_mx
                          </a>
                        </li>
                        <li>
                          <strong>Youtube:</strong>
                          <a
                            href="https://www.youtube.com/channel/UCu2Uc7YeJmE9mvGG9OK-zbQ"
                            >Secretaría de Salud México
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <v-list v-show="!showResult" three-line subheader>
              <v-list-item>
                <v-list-item-content>
                  <!-- <v-list-item-title>Content filtering</v-list-item-title>
                  <v-list-item-subtitle
                    >Set the content filtering level to restrict apps that can
                    be downloaded</v-list-item-subtitle
                  >-->
                  <!-- <Form /> -->
                  <Steps />
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
                      :src="$store.state.base + '/feelings/' + item.icon"
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

<style scoped>
li.has-text-weight-bold {
  list-style: none;
}
.hero-body {
  padding: 0rem;
}
</style>

<script>
import { mapState } from 'vuex'
export default {
  components: {
    Steps: () => import('@/components/Steps'),
    Form: () => import('@/components/Form')
  },
  created () {},
  computed: {
    ...mapState(['showResult', 'diagnosis', 'covid'])
  },
  data () {
    return {
      dialog: false,
      help: false,
      notifications: false,
      sound: true,
      widgets: false,
      diseases: [
        '',
        'ALERGIA',
        'Coronavirus',
        'INFLUENZA',
        'RESFRIADO'
      ],
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

<template>
  <div>
    <b-steps
      type="is-dark"
      size="is-medium"
      v-model="activeStep"
      :animated="true"
      :has-navigation="hasNavigation"
      :icon-prev="prevIcon"
      :icon-next="nextIcon"
    >
      <b-step-item icon="numeric-1">
        <Form :questions="questions" :start="0" :end="4" />
      </b-step-item>

      <b-step-item icon="numeric-2">
        <Form :questions="questions" :start="4" :end="8" />
      </b-step-item>

      <b-step-item icon="numeric-3">
        <Form :questions="questions" :start="8" :end="11" />
      </b-step-item>

      <template
        v-if="customNavigation"
        slot="navigation"
        slot-scope="{ previous, next }"
      >
        <div class="has-text-centered">
          <b-button
            size="is-medium"
            v-if="activeStep < 2 || activeStep > 1"
            type="is-dark"
            icon-left="arrow-left"
            :disabled="previous.disabled"
            @click.prevent="previous.action"
          >
            Regresar
          </b-button>
          <b-button
            v-if="activeStep < 2"
            size="is-medium"
            type="is-warning"
            icon-right="arrow-right"
            :disabled="next.disabled"
            @click.prevent="next.action"
          >
            Siguiente
          </b-button>
          <b-button
            v-else-if="activeStep === 2"
            :loading="loading"
            size="is-medium"
            type="is-info"
            @click.prevent="sendForm()"
          >
            Resultado
          </b-button>
        </div>
      </template>
    </b-steps>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
    Form: () => import('@/components/Form')
  },
  data () {
    return {
      activeStep: 0,
      loading: false,
      hasNavigation: true,
      customNavigation: true,
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right',
      questions: [
        { text: '1. ¿Cuál es tu temperatura? (°C)', tmp: true, value: 1 },
        { text: '2. ¿Cómo calificarías tu dolor de cabeza?', value: 1 },
        { text: '3. ¿Cómo calificarías dolores en tu cuerpo?', value: 1 },
        { text: '4. ¿Cómo calificarías tu fatiga o debilidad?', value: 1 },
        { text: '5. ¿Qué tan tapada sientes la nariz?', value: 1 },
        { text: '6. ¿Qué tanto estornudas?', value: 1 },
        { text: '7. ¿Qué tan irritada sientes la garganta?', value: 1 },
        { text: '8. ¿Qué tanta tos tienes?', value: 1 },
        { text: '9. ¿Qué tanto se te dificulta respirar?', value: 1 },
        { text: '10. ¿Qué tanto escurrimiento nasal tienes?', value: 1 },
        { text: '11. ¿Qué tanta diarrea presentas?', value: 1 }
      ]
    }
  },
  methods: {
    async sendForm () {
      this.loading = true
      await this.$store.dispatch(
        'getDiagnosis',
        this.questions.map(q => q.value)
      )
      this.loading = false
    }
  }
}
</script>

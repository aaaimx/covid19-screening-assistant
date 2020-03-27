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
      v-if="!showResults"
    >
      <b-step-item icon="numeric-1">
        <Form :start="0" :end="4" />
      </b-step-item>

      <b-step-item icon="numeric-2">
        <Form :start="4" :end="8" />
      </b-step-item>

      <b-step-item icon="numeric-3">
        <Form :start="8" :end="11" />
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
            size="is-medium"
            type="is-info"
            @click.prevent="next.action"
          >
            Resultado
          </b-button>
        </div>
      </template>
    </b-steps>
  </div>
</template>

<script>
export default {
  components: {
    Form: () => import('@/components/Form')
  },

  data () {
    return {
      activeStep: 0,
      showResults: false,
      isAnimated: true,
      hasNavigation: true,
      customNavigation: true,
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right',
      isStepsClickable: false,
      isProfileSuccess: false
    }
  }
}
</script>

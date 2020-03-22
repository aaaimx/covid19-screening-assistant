<template>
  <section id="welcome" class="hide-overflow">
    <v-layout>
      <v-flex hidden-sm-and-down md4>
        <v-img
          src="https://wholelifestylenutrition.com/wp-content/uploads/Flu-2.jpg"
          height="100vh"
        />
      </v-flex>

      <v-flex
        xs12
        md8
        align-content-space-between
        layout
        :pa-5="$vuetify.breakpoint.smAndDown"
        wrap
      >
        <base-bubble-1 style="transform: rotate(180deg) translateY(25%)" />

        <v-layout v-if="!show" justify-center>
          <v-flex xs10 md8>
            <base-heading>Welcome!</base-heading>
            <base-text>
              Lorem ipsum dolor sit amet, consectetur ad ipiscin elit. Etiam
              vulputate augue vel felis gra vida porta. Lorem ipsum dolor sit
              amet, cons ectetur adipiscing elit.<br />
              Lorem ipsum dolor sit amet, consectetur ad ipiscin elit. Etiam
              vulputate augue vel felis gra vida porta. Lorem ipsum dolor sit
              amet, cons ectetur adipiscing elit.
            </base-text>
            <v-btn @click.native="show = !show" class="mt-4">
              Start quizz!
            </v-btn>
          </v-flex>
        </v-layout>
        <v-slide-y-transition>
          <v-layout align-center v-if="show" justify-center>
              
            <v-flex xs10 md10 align-content-space-between layout wrap>
              <Form />

              <v-btn @click.native="show = !show" class="mt-4">
                Finish test
              </v-btn>
            </v-flex>
          </v-layout>
        </v-slide-y-transition>
        <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        />
      </v-flex>
    </v-layout>
  </section>
</template>
<script>
export default {
  data() {
    return {
      show: true
    };
  },
  components: {
    Form: () => import("@/components/Form")
  }
};
</script>

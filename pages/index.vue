<template>
  <div>
    <Welcome />
    <div class="box cta">
      <p class="has-text-centered">
        <span class="tag is-size-6 font-weight-bold is-warning"
          >¡IMPORTANTE!</span
        >
        Este test <b>NO REEMPLAZA</b>, <b>NI PRETENDE REEMPLAZAR</b> al
        diagnóstico de un profesional de la salud.
      </p>
    </div>
  </div>
</template>
<style scoped>
.box.cta {
  border-radius: 0;
  border-left: none;
  border-right: none;
}
</style>

<script>
export default {
  components: {
    Welcome: () => import('@/components/Welcome')
  }
}
</script>

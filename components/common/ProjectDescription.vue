<template>
  <v-card flat tile width="100%" class="text-center mt-4">
    <base-subheading>Preguntas frecuentes </base-subheading>
    <v-card-text class="text-center">
      <div class="mb-4"><h2>¿Es un diagnóstico definitivo?</h2></div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </v-card-text>

    <v-card-text class="text-center">
      <base-subheading>Acerca del proyecto </base-subheading>

      <v-flex xs12 text-xs-center mt-5 mb-5>
        Este proyecto fue creado para ayudar a las personas a tener un
        diagnóstico rápido en base los síntomas presentados, evitar el pánico,
        <br />
        saturación de hospitales y centros médicos y contagio al acudir a
        centros concurridos.
        <br />
        <br />Los diagnósticos son basados en estudios del
        <a href="http://www.kdheks.gov/"
          >Departamento de Salud y Medio Ambiente de Kansas</a
        >
        <br />
        <a
          href="http://www.kdheks.gov/coronavirus/toolkit/Cold_vs._Flu_vs._Allergies_vs._Coronavirus.pdf"
          >CORONAVIRUS vs. COLD vs. FLU vs. ALLERGIES
        </a>
      </v-flex>
      <v-flex xs12 text-xs-center>
        Este proyecto está enlazado a una API hecha por el Capitulo Estudiantil
        de Inteligencia Artificial, <br />
        empleando Logica difusa para el diagnóstico.

        <br />
        <br />DOCUMENTACIÓN:
        <a href="https://github.com/aaaimx/covid19-detection"
          >https://github.com/aaaimx/covid19-detection</a
        >
      </v-flex>
      <v-flex xs12 text-xs-center mt-10 mb-5> </v-flex>
      <p class="card-text">
        Apreciamos su interés en ayudar a esta comunidad <br />
        que se esfuerza cada día para ser mejor, especialmente para usted.
      </p>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="VPZGMW4MPWAYJ" />
        <input
          type="image"
          style="display: block; margin: 0 auto;"
          src="https://www.paypalobjects.com/en_US/MX/i/btn/btn_donateCC_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
      </form>
    </v-card-text>
    <v-card-text class="text-center">
      <div class="mb-4"><h1>Comparte en redes sociales</h1></div>
      <a
        class="share-icon mx-4"
        target="_blank"
        href="https://www.facebook.com/share.php?u=https://www.aaaimx.org/covid19-screening-assistant/"
      >
        <img
          width="50px"
          src="https://www.matthewb.id.au/social/facebook.png"
          alt="Facebook"
      /></a>
      <a
        class="share-icon mx-4"
        target="_blank"
        href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.aaaimx.org/covid19-screening-assistant/"
      >
        <img
          width="50px"
          src="https://www.matthewb.id.au/social/linkedin.png"
          alt="Linked In"
      /></a>
      <a
        class="share-icon mx-4"
        target="_blank"
        href="https://twitter.com/intent/tweet?text=&url=https://www.aaaimx.org/covid19-screening-assistant/"
      >
        <img
          width="50px"
          src="https://www.matthewb.id.au/social/twitter.png"
          alt="Tweet"
      /></a>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ProjectDescription'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Cookie');

.bmc-button img {
  width: 27px !important;
  margin-bottom: 1px !important;
  box-shadow: none !important;
  border: none !important;
  vertical-align: middle !important;
}
.bmc-button {
  line-height: 36px !important;
  height: 37px !important;
  text-decoration: none !important;
  display: inline-flex !important;
  color: #ffffff !important;
  background-color: #ff813f !important;
  border-radius: 3px !important;
  border: 1px solid transparent !important;
  padding: 1px 9px !important;
  font-size: 22px !important;
  letter-spacing: 0.6px !important;
  margin: 0 auto !important;
  font-family: 'Cookie', cursive !important;
  -webkit-box-sizing: border-box !important;
  box-sizing: border-box !important;
  -o-transition: 0.3s all linear !important;
  -webkit-transition: 0.3s all linear !important;
  -moz-transition: 0.3s all linear !important;
  -ms-transition: 0.3s all linear !important;
  transition: 0.3s all linear !important;
}
</style>

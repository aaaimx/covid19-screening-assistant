<template>
  <v-card flat tile width="100%" class="text-center mt-4">
    <section class="section" id="about">
      <!-- Title -->
      <div class="section-heading">
        <base-heading>Acerca del proyecto </base-heading>
        <div class="container">
          <p>
            <br />Los diagnósticos son basados en información provista por el
            <a href="http://www.kdheks.gov/"
              >Departamento de Salud y Medio Ambiente de Kansas</a
            >
            <br />
            particularmente en el documento
            <a
              href="http://www.kdheks.gov/coronavirus/toolkit/Cold_vs._Flu_vs._Allergies_vs._Coronavirus.pdf"
              ><i>CORONAVIRUS vs. COLD vs. FLU vs. ALLERGIES </i>
            </a>
          </p>
          <p>
            Este proyecto está enlazado a una API hecha por el
            <a href="https://www.aaaimx.org" target="_blank"
              >Capitulo Estudiantil de Inteligencia Artificial</a
            >, <br />
            del <b>Departamento de Sistemas y Computación </b> del
            <b
              >Tecnológico Nacional de México/Instituto Tecnológico de Mérida
            </b>
            <br />
            empleando <b>lógica difusa </b> para el diagnóstico.

            <br /><br />

            <a
              href="https://github.com/aaaimx/covid19-screening-assistant"
              ><img
                src="https://img.shields.io/badge/contribute-covid19--screening--asisstant-yellow"
                alt=""
            /></a>
          </p>

          <p class="font-weight-bold">
            ¿Eres un profesional de la salud y consideras que puedes contribuir
            a mejorar el sistema? <br />
            ¿Has sido diagnosticado con alguna de estas condiciones por un
            profesional de la salud y el resultado del sistema no coincide?
          </p>
          <p>
            Por favor envíanos un correo a
            <a href="mailto:research@aaaimx.org">research@aaaimx.org </a>
            informándonos de los casos incorrectos <br />
            o las sugerencias que tengas para que podamos mejorar el sistema.
          </p>
          <div class="mb-2">
            <h1 class="is-size-3">Comparte en redes sociales</h1>
          </div>
          <a
            class="share-icon mx-4"
            target="_blank"
            href="https://www.facebook.com/share.php?u=https://www.aaaimx.org/covid19-assistant/"
          >
            <img
              width="50px"
              src="https://www.matthewb.id.au/social/facebook.png"
              alt="Facebook"
          /></a>
          <a
            class="share-icon mx-4"
            target="_blank"
            href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.aaaimx.org/covid19-assistant/"
          >
            <img
              width="50px"
              src="https://www.matthewb.id.au/social/linkedin.png"
              alt="Linked In"
          /></a>
          <a
            class="share-icon mx-4"
            target="_blank"
            href="https://twitter.com/intent/tweet?text=&url=https://www.aaaimx.org/covid19-assistant/"
          >
            <img
              width="50px"
              src="https://www.matthewb.id.au/social/twitter.png"
              alt="Tweet"
          /></a>
          <br />
          <br />
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
            <input
              type="hidden"
              name="hosted_button_id"
              value="VPZGMW4MPWAYJ"
            />
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
        </div>
      </div>
    </section>
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

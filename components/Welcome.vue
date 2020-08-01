<template>
  <section class="hero is-warning is-small is-bold">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://www.aaaimx.org">
              <img
                src="https://www.aaaimx.org/img/other/aaaimx-ist.png"
                alt="Logo"
              />
            </a>
            <!-- https://www.aaaimx.org/img/sprites/aaai-transpeps.png

              <span class="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span> -->
          </div>
          <!-- <div id="navbarMenu" class="navbar-menu">
            <div class="navbar-end">
              <div class="tabs is-right">
                <ul>
                  <li class="is-active"><a>Home</a></li>
                  <li><a href="">Examples</a></li>
                  <li><a href="">Features</a></li>
                  <li><a href="">Team</a></li>
                  <li><a href="">Help</a></li>
                </ul>
                <span class="navbar-item">
                  <a
                    class="button is-white is-outlined"
                    href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/hero.html"
                  >
                    <span class="icon">
                      <i class="fa fa-github"></i>
                    </span>
                    <span title="Hello from the other side">View Source</span>
                  </a>
                </span>
              </div>
            </div>
          </div> -->
        </div>
      </nav>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <base-heading class="font-weight-bold"
          >COVID-19 | Asistente de diagnóstico</base-heading
        >
        <h2 class="subtitle">
          El sitio fue creado con la intención de asistir a las personas a tener
          un diagnóstico rápido y sin salir de su hogar con base en los síntomas
          presentados por distintas condiciones respiratorias. El objetivo es
          evitar el pánico, saturación de hospitales y centros médicos, así como
          el posible contagio al acudir a centros concurridos.
        </h2>
        <strong>PARA CONTINUAR, HAZ CLICK</strong>
        <Wizard />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      show: false
    }
  },
  components: {
    Wizard: () => import('@/components/Wizard')
  }
}
</script>

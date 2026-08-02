<template>
  <div class="container my-5 shadow p-5 bg-white rounded border-top border-light-blue border-5">
    <div class="row align-items-center">
      <div class="col-lg-7">
        <h2 class="display-6 fw-bold text-dark text-uppercase mb-4">Om mig</h2>

        <p class="lead text-light-blue fw-bold">
          Fullstack-utvecklare med fokus på .NET-ekosystemet och moderna
          frontend-ramverk.
        </p>

        <div class="text-muted mb-4">
          <p>
            Hej, jag heter Admir.

            Jag är en systemutvecklare som gillar att bygga enkla, stabila och användarvänliga webblösningar.

            Till vardags hittar du mig på itm8, där jag jobbar med allt från backend i .NET / C# till frontend i Vue.js.
          </p>
        </div>

        <div class="d-flex gap-3">
          <router-link to="/projects" class="btn btn-outline-dark px-4">Se mina projekt</router-link>
          <router-link to="/contact" class="btn btn-default px-4">
            <span>Kontakta mig</span>
          </router-link>
        </div>
      </div>

      <div class="col-lg-5 mt-5 mt-lg-0">
        <div class="p-4 bg-light rounded shadow-sm border-start border-4 border-light-blue">
          <h3 class="h5 fw-bold mb-4 text-dark">Snabba fakta</h3>

          <ul class="list-unstyled mb-0">
            <li class="mb-3 d-flex align-items-start">
              <i class="bi bi-code-square text-light-blue me-3 mt-1"></i>
              <div>
                <span class="d-block fw-bold small text-dark">Primär stack</span>
                <span class="small text-muted">.NET, Vue.js, Optimizely CMS, SQL</span>
              </div>
            </li>
            <li class="mb-3 d-flex align-items-start">
              <i class="bi bi-mortarboard text-light-blue me-3 mt-1"></i>
              <div>
                <span class="d-block fw-bold small text-dark">Utbildning</span>
                <span class="small text-muted">Kandidatexamen i datavetenskap</span>
              </div>
            </li>
            <li class="mb-3 d-flex align-items-start">
              <i class="bi bi-geo-alt text-light-blue me-3 mt-1"></i>
              <div>
                <span class="d-block fw-bold small text-dark">Plats</span>
                <span class="small text-muted">Sverige</span>
              </div>
            </li>
            <li class="d-flex align-items-start">
              <i class="bi bi-briefcase text-light-blue me-3 mt-1"></i>
              <div>
                <span class="d-block fw-bold small text-dark">Nuvarande roll</span>
                <span class="small text-muted">Systemutvecklare på itm8</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "AboutMe",
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables/_colors.scss";
@import "@/styles/components/_default-btn.scss";
@import "@/styles/components/_border.scss";
</style>

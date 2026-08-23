<template>
  <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-white py-3 shadow-sm" id="mainNav">
    <div class="container">
      <router-link class="navbar-brand fw-bold" to="/">
        admirmuhic.se
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
          <li v-for="item in navItems" :key="item.path" class="nav-item">
            <router-link class="nav-link" :to="`/${item.path}`">
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { shallowRef } from "vue";

const navItems = shallowRef([
  { path: "about-me", label: "Om mig" },
  { path: "projects", label: "Projekt" },
  { path: "resume", label: "CV" },
  { path: "architecture", label: "Arkitektur" },
  { path: "contact", label: "Kontakta mig" },
]);

defineOptions({
  name: "TheNavbar",
});
</script>

<style scoped lang="scss">
.text-light-blue {
  color: var(--bs-info);
}
</style>

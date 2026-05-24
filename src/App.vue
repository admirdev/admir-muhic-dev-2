<script setup>
import TheNavbar from "./components/bars/TheNavbar.vue";

defineOptions({
  name: "App",
});
</script>

<template>
  <div id="app">
    <TheNavbar />
    <div>
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>

<template>
  <div class="alert alert-danger" role="alert">
    {{ alertMessage }}
  </div>
</template>

<script setup>
defineProps({
  alertMessage: {
    type: String,
    required: true,
    default: "",
  },
});

defineOptions({
  name: "ErrorAlert",
});
</script>

<style scoped lang="scss"></style>

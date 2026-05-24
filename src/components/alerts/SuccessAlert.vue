<template>
  <div class="alert alert-primary" role="alert">
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
  name: "SuccessAlert",
});
</script>

<style scoped lang="scss"></style>

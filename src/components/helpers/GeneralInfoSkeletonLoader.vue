<template>
  <div v-if="loading" class="border-start border-4 border-light-blue ps-4">
    <p class="placeholder-wave fs-4 fw-light text-secondary lh-base mb-0">
      <span class="placeholder col-12"></span>
      <span class="placeholder col-8"></span>
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    required: true,
    default: false,
  },
});

defineOptions({
  name: "GeneralInfoSkeletonLoader",
});
</script>

<style scoped lang="scss">
@import "@/styles/components/_border.scss";

// No additional CSS needed - using Bootstrap classes
</style>

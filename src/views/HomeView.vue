<script setup>
import { onMounted } from "vue";
import Profile from "../components/profile/Profile.vue";
import GeneralInfoSkeletonLoader from "../components/helpers/GeneralInfoSkeletonLoader.vue";
import { useHomeStore } from "../stores/home.js";

defineOptions({
  name: "HomeView",
});

const homeStore = useHomeStore();

onMounted(() => {
  if (!homeStore.generalInfo) {
    homeStore.fetchGeneralInfo();
  }
});
</script>

<template>
  <header class="masthead pt-5">
    <div class="container pb-5">
      <div class="row mb-5 justify-content-start">
        <div class="col-lg-10 col-xl-9">
          <GeneralInfoSkeletonLoader
            v-if="homeStore.loading"
            :loading="homeStore.loading"
          />
          <p
            v-else-if="homeStore.generalInfo"
            class="fs-4 fw-light text-secondary lh-base border-start border-4 border-light-blue ps-4 mb-0"
          >
            {{ homeStore.generalInfo.generalInfo }}
          </p>
        </div>
      </div>

      <Profile />

      <router-view />

      <div
        v-if="homeStore.error"
        class="alert alert-danger d-inline-block mt-3"
        role="alert"
      >
        Failed to load: {{ homeStore.error.message || homeStore.error }}
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "../styles/variables/_colors.scss";
@import "@/styles/components/_border.scss";

.masthead {
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>

import { defineStore } from "pinia";
import { ref } from "vue";

export const useHomeStore = defineStore("home", () => {
  const generalInfo = ref(null);
  const loading = ref(false);
  const error = ref(null);

  function saveGeneralInfo(data) {
    generalInfo.value = data;
  }

  async function fetchGeneralInfo() {
    loading.value = true;
    error.value = null;
    try {
      const { getHomeGeneralInfo } =
        await import("../services/home.service.js");
      const res = await getHomeGeneralInfo();
      saveGeneralInfo(res);
      return res;
    } catch (err) {
      error.value = err;
      throw err;
    } finally {
      loading.value = false;
    }
  }

  return {
    generalInfo,
    loading,
    error,
    saveGeneralInfo,
    fetchGeneralInfo,
  };
});

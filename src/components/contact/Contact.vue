<template>
  <div
    class="container my-5 shadow p-5 bg-white rounded border-top border-light-blue border-5"
  >
    <div class="row">
      <div class="col-lg-5">
        <h2 class="display-6 fw-bold text-dark text-uppercase mb-4">
          Kontakta mig
        </h2>

        <div class="mb-3 d-flex align-items-center">
          <div class="bg-light rounded-circle p-2 me-3">
            <i class="bi bi-envelope text-light-blue"></i>
          </div>
          <a
            href="mailto:admir@admirmuhic.se"
            class="text-muted text-decoration-none"
          >
            admir@admirmuhic.se
          </a>
        </div>
        <div class="mb-3 d-flex align-items-center">
          <div class="bg-light rounded-circle p-2 me-3">
            <i class="bi bi-linkedin text-light-blue"></i>
          </div>
          <a
            href="https://linkedin.com/in/admir-muhić-a17b11109"
            target="_blank"
            class="text-muted text-decoration-none"
          >
            linkedin.com/in/admir-muhić-a17b11109
          </a>
        </div>
      </div>

      <div class="col-lg-7">
        <form @submit.prevent="handleSubmit">
          <div class="row g-3">
            <div class="col-md-6 text-light-blue">
              <label class="form-label small fw-bold">Namn</label>
              <input
                v-model="formData.name"
                type="text"
                class="form-control bg-light border-0"
                required
              />
            </div>
            <div class="col-md-6 text-light-blue">
              <label class="form-label small fw-bold">E-post</label>
              <input
                v-model="formData.email"
                type="email"
                class="form-control bg-light border-0"
                required
              />
            </div>
            <div class="col-12 text-light-blue">
              <label class="form-label small fw-bold">Meddelande</label>
              <textarea
                v-model="formData.message"
                class="form-control bg-light border-0"
                rows="4"
                required
              ></textarea>
            </div>
            <div class="col-12">
              <button type="submit" class="btn border-0 btn-default">
                <span>Skicka meddelande</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "Contact",
});

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const handleSubmit = () => {
  console.log("Form submitted:", formData.value);
  alert("Tack för ditt meddelande!");
  // Reset form
  formData.value = { name: "", email: "", message: "" };
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables/_colors.scss";
@import "@/styles/components/_default-btn.scss";
@import "@/styles/components/_border.scss";
</style>

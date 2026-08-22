<template>
  <div class="container my-5 shadow p-5 bg-white rounded border-top border-light-blue border-5">
    <div class="row">
      <div class="col-lg-5">
        <h2 class="display-6 fw-bold text-dark text-uppercase mb-4">
          Kontakta mig
        </h2>

        <div class="mb-3 d-flex align-items-center">
          <div class="bg-light rounded-circle p-2 me-3">
            <i class="bi bi-envelope text-light-blue"></i>
          </div>
          <a href="mailto:admir@admirmuhic.se" class="text-muted text-decoration-none">
            admir@admirmuhic.se
          </a>
        </div>
        <div class="mb-3 d-flex align-items-center">
          <div class="bg-light rounded-circle p-2 me-3">
            <i class="bi bi-linkedin text-light-blue"></i>
          </div>
          <a href="https://linkedin.com/in/admir-muhić-a17b11109" target="_blank"
            class="text-muted text-decoration-none">
            linkedin.com/in/admir-muhić-a17b11109
          </a>
        </div>
      </div>

      <div class="col-lg-7">
        <form @submit.prevent="handleSubmit" novalidate>
          <div class="row g-3">
            <div class="col-md-6 text-light-blue">
              <label class="form-label small fw-bold">Namn</label>
              <input v-model="formData.name" type="text" class="form-control bg-light border-0"
                :disabled="isLoading || cooldownTimer > 0" required />
            </div>

            <div class="col-md-6 text-light-blue">
              <label class="form-label small fw-bold">E-post</label>
              <input v-model="formData.email" type="email" class="form-control bg-light border-0"
                :disabled="isLoading || cooldownTimer > 0" required />
            </div>

            <div class="col-12 text-light-blue">
              <label class="form-label small fw-bold">Meddelande</label>
              <textarea v-model="formData.message" class="form-control bg-light border-0" rows="4"
                :disabled="isLoading || cooldownTimer > 0" required></textarea>
            </div>

            <!-- Feedback-meddelanden -->
            <div v-if="successMessage" class="col-12 text-success small fw-bold">
              {{ successMessage }}
            </div>
            <div v-if="errorMessage" class="col-12 text-danger small fw-bold">
              {{ errorMessage }}
            </div>

            <div class="col-12">
              <button type="submit" class="btn border-0 btn-default" :disabled="isLoading || cooldownTimer > 0">
                <span v-if="isLoading">Skickar...</span>
                <span v-else-if="cooldownTimer > 0">Vänta ({{ cooldownTimer }}s)</span>
                <span v-else>Skicka meddelande</span>
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
import { sendContactEmail } from "@/services/contact.service.js";

defineOptions({
  name: "Contact",
});

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const isLoading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");
const cooldownTimer = ref(0);
let timerInterval = null;

const validateForm = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formData.value.name.trim()) {
    return "Vänligen ange ditt namn.";
  }
  if (!formData.value.email.trim() || !emailRegex.test(formData.value.email)) {
    return "Vänligen ange en giltig e-postadress.";
  }
  if (!formData.value.message.trim() || formData.value.message.trim().length < 5) {
    return "Meddelandet måste bestå av minst 5 tecken.";
  }
  return null;
};

const startCooldown = (seconds = 30) => {
  cooldownTimer.value = seconds;
  timerInterval = setInterval(() => {
    cooldownTimer.value--;
    if (cooldownTimer.value <= 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
};

const handleSubmit = async () => {
  successMessage.value = "";
  errorMessage.value = "";

  const validationError = validateForm();
  if (validationError) {
    errorMessage.value = validationError;
    return;
  }

  isLoading.value = true;

  try {
    await sendContactEmail({
      name: formData.value.name.trim(),
      email: formData.value.email.trim(),
      message: formData.value.message.trim(),
    });

    successMessage.value = "Tack! Ditt meddelande har skickats.";
    formData.value = { name: "", email: "", message: "" };

    startCooldown(30);
  } catch (error) {
    errorMessage.value = "Ett fel uppstod när meddelandet skulle skickas. Försök igen senare.";
  } finally {
    isLoading.value = false;
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables/_colors.scss";
@import "@/styles/components/_default-btn.scss";
@import "@/styles/components/_border.scss";

button:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}
</style>
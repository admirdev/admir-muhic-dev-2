<template>
  <div class="row g-4">
    <div v-for="i in 2" :key="i" class="col-md-6">
      <div
        class="card h-100 border-0 bg-light shadow-sm overflow-hidden"
        aria-hidden="true"
      >
        <div class="project-image-placeholder placeholder-glow">
          <div class="placeholder w-100 h-100"></div>
        </div>
        <div class="card-body p-4">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
          </h5>
          <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
          </p>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <div class="placeholder-glow w-50">
              <span class="placeholder col-4 me-1"></span>
              <span class="placeholder col-4"></span>
            </div>
            <span class="placeholder col-3"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-image-placeholder {
  height: 180px;
  background-color: #e9ecef;
}
</style>

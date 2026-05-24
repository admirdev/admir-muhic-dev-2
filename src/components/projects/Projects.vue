<template>
  <div
    class="container my-5 shadow p-5 bg-white rounded border-top border-light-blue border-5"
  >
    <h2 class="display-6 fw-bold text-dark text-uppercase mb-5">Projekt</h2>

    <ProjectsSkeletonLoader v-if="projectsStore.loading" />

    <div
      v-else-if="projectsStore.error"
      class="alert alert-danger"
      role="alert"
    >
      Failed to load projects:
      {{ projectsStore.error.message || projectsStore.error }}
    </div>

    <div v-else class="row g-4">
      <div
        v-for="project in projectsStore.projects"
        :key="project.id"
        class="col-md-6"
      >
        <div
          class="card h-100 border-0 bg-light shadow-sm overflow-hidden project-card"
        >
          <div class="project-image-container">
            <img
              :src="project.image"
              :alt="project.title + ' Thumbnail'"
              class="img-fluid project-thumb"
            />
          </div>

          <div class="card-body p-4">
            <h3 class="h5 fw-bold">{{ project.title }}</h3>
            <p class="text-muted small">{{ project.description }}</p>

            <div class="d-flex justify-content-between align-items-center mt-3">
              <div class="tags">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="badge border text-light-blue me-1"
                >
                  {{ tag }}
                </span>
              </div>
              <a
                :href="project.link"
                target="_blank"
                class="text-decoration-none fw-bold text-light-blue small"
              >
                Besök hemsidan <i class="bi bi-arrow-up-right-circle ms-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useProjectsStore } from "../../stores/projects";
import ProjectsSkeletonLoader from "../helpers/ProjectsSkeletonLoader.vue";

const projectsStore = useProjectsStore();

onMounted(() => {
  projectsStore.fetchProjects();
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables/_colors.scss";
@import "@/styles/components/_border.scss";

.project-image-container {
  height: 180px;
  overflow: hidden;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}

.project-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .project-thumb {
  transform: scale(1.05);
}

.text-light-blue {
  color: $text-light-blue !important;
}
</style>

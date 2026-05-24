import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchProjects() {
      if (this.projects.length > 0) return;

      this.loading = true;
      this.error = null;
      try {
        const { getProjects } = await import("../services/projects.service");
        const data = await getProjects();
        this.projects = data.map((project) => ({
          ...project,
          tags: project.tags
            ? project.tags.split(",").map((tag) => tag.trim())
            : [],
        }));
      } catch (err) {
        this.error = err.message || err;
      } finally {
        this.loading = false;
      }
    },
  },
});

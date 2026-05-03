<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const projects = [
  {
    titleKey: "agendaTitle",
    descKey: "agendaDesc",
    github: "https://github.com/paulovictorarmando/agenda",
    tags: ["Django REST", "JWT", "Pytest", "Python"],
  },
  {
    titleKey: "ircTitle",
    descKey: "ircDesc",
    github: "https://github.com/paulovictorarmando/ft_irc",
    tags: ["C++", "Sockets", "Networking", "Concurrency"],
  },
  {
    titleKey: "inceptionTitle",
    descKey: "inceptionDesc",
    github: "https://github.com/paulovictorarmando/inception",
    tags: ["Docker", "DevOps", "Nginx", "Infrastructure"],
  },
];
</script>

<template>
  <section id="projects" class="section bg-gray-50 dark:bg-gray-900">
    <div class="container-app">
      <h2 class="section-title">{{ t("projects.title") }}</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, idx) in projects" :key="idx" class="card group">
          <h3 class="text-xl font-semibold mb-3 dark:text-white">
            {{ t(`projects.${project.titleKey}`) }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            {{ t(`projects.${project.descKey}`) }}
          </p>

          <div class="flex flex-wrap gap-2 mb-6">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="text-xs px-2 py-1 rounded bg-primary-100 dark:bg-gray-800 text-primary-700 dark:text-accent-400"
            >
              {{ tag }}
            </span>
          </div>

          <a
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-outline inline-flex"
          >
            {{ t("projects.view") }}
            <span class="ml-2">↗</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

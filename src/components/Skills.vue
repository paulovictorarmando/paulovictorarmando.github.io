<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const skillsData = {
  languages: ["C", "C++", "Python", "JavaScript"],
  frameworks: ["Django", "Django REST Framework"],
  databases: ["SQL", "PostgreSQL", "SQLite"],
  devops: ["Docker", "Nginx", "Git", "GitHub", "CMake", "VS Code"],
  testing: ["Pytest"],
  other: ["Linux", "Security", "APIs REST", "Systems", "Networks"],
};

const skillCategories = [
  { key: "languages", label: "languages" },
  { key: "frameworks", label: "frameworks" },
  { key: "databases", label: "databases" },
  { key: "devops", label: "devops" },
  { key: "testing", label: "testing" },
  { key: "other", label: "other" },
];
</script>

<template>
  <section id="skills" class="section">
    <div class="container-app">
      <h2 class="section-title">{{ t("skills.title") }}</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="category in skillCategories"
          :key="category.key"
          class="card"
        >
          <h3 class="text-xl font-semibold mb-4 dark:text-white">
            {{ t(`skills.${category.label}`) }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in skillsData[category.key]"
              :key="skill"
              class="skill-badge"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

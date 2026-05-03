<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const profiles = [
  {
    name: "GitHub",
    icon: "🐙",
    url: "https://github.com/paulovictorarmando/",
    label: "github",
  },
  {
    name: "LeetCode",
    icon: "💻",
    url: "https://leetcode.com/u/paulovictorarmando/",
    label: "leetcode",
  },
  {
    name: "HackerRank",
    icon: "🏆",
    url: "https://www.hackerrank.com/profile/paulovictorarma1",
    label: "hackerrank",
  },
  {
    name: "SoloLearn",
    icon: "📚",
    url: "https://www.sololearn.com/en/profile/34825755",
    label: "sololearn",
  },
  {
    name: "Beecrowd",
    icon: "🐝",
    url: "https://judge.beecrowd.com/en/profile/1060326",
    label: "beecrowd",
  },
  {
    name: "LinkedIn",
    icon: "💼",
    url: "https://linkedin.com/in/paulovictorarmando",
    label: "linkedin",
  },
  {
    name: "Instagram",
    icon: "📷",
    url: "https://www.instagram.com/paullo_armandoo/",
    label: "instagram",
  },
];
</script>

<template>
  <section id="profiles" class="section bg-gray-900">
    <div class="container-app">
      <h2 class="section-title">{{ t("profiles.title") }}</h2>
      <p class="section-subtitle">{{ t("profiles.subtitle") }}</p>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
        <a
          v-for="profile in profiles"
          :key="profile.label"
          :href="profile.url"
          target="_blank"
          rel="noopener noreferrer"
          class="card flex flex-col items-center justify-center text-center hover:scale-105 transition-transform"
        >
          <span class="text-4xl mb-3">{{ profile.icon }}</span>
          <span class="font-semibold text-sm dark:text-white">{{
            profile.name
          }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

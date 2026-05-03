<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const certifications = [
  {
    name: "python1",
    issuer: "Cisco",
    url: "https://www.credly.com/badges/626edae3-755e-474d-a838-48c29b1b0969",
  },
  {
    name: "python2",
    issuer: "Cisco",
    url: "https://www.credly.com/badges/2eb2824a-a1ad-4615-8864-111d8cff7faa",
  },
  {
    name: "hackerrank",
    issuer: "HackerRank",
    url: "https://www.hackerrank.com/certificates/4b3b85ad61fb",
  },
  {
    name: "fiap",
    issuer: "FIAP",
    url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=db0bae98beea3edd6e46af3e4b7f940c&action=view",
  },
  {
    name: "sololearn",
    issuer: "SoloLearn",
    url: "https://www.sololearn.com/certificates/CC-WJ6LRCLT",
  },
];
</script>

<template>
  <section id="certifications" class="section">
    <div class="container-app">
      <h2 class="section-title">{{ t("certifications.title") }}</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          v-for="cert in certifications"
          :key="cert.name"
          :href="cert.url"
          target="_blank"
          rel="noopener noreferrer"
          class="card group flex items-start justify-between"
        >
          <div>
            <h3
              class="font-semibold dark:text-white group-hover:text-primary-600 dark:group-hover:text-accent-500 transition-colors"
            >
              {{ t(`certifications.${cert.name}`) }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ cert.issuer }}
            </p>
          </div>
          <span
            class="text-primary-600 dark:text-accent-500 text-xl group-hover:translate-x-1 transition-transform"
            >→</span
          >
        </a>
      </div>
    </div>
  </section>
</template>

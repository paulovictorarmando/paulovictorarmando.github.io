<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section id="contact" class="section">
    <div class="container-app text-center">
      <h2 class="section-title">{{ t("contact.title") }}</h2>

      <div class="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
        <!-- Email -->
        <a
          href="mailto:paulovictorarmando@gmail.com"
          class="card hover:scale-105 transition-transform"
        >
          <div class="text-3xl mb-3">✉️</div>
          <h3 class="font-semibold mb-2 dark:text-white">
            {{ t("contact.email") }}
          </h3>
          <p class="text-sm text-gray-400 truncate">
            paulovictorarmando@gmail.com
          </p>
        </a>

        <!-- Phone -->
        <a href="tel:+244940523444" class="card hover:scale-105 transition-transform">
          <div class="text-3xl mb-3">📱</div>
          <h3 class="font-semibold mb-2 dark:text-white">
            {{ t("contact.phone") }}
          </h3>
          <p class="text-sm text-gray-400">
            +244 940 523 444
          </p>
        </a>

        <!-- Location -->
        <div class="card">
          <div class="text-3xl mb-3">📍</div>
          <h3 class="font-semibold mb-2 dark:text-white">
            {{ t("contact.location") }}
          </h3>
          <p class="text-sm text-gray-400">Luanda, Angola</p>
        </div>
      </div>

      <div class="text-center">
        <p class="text-gray-400 mb-6">
          {{ t("contact.followMe") }}
        </p>
        <div class="flex justify-center gap-6">
          <a
            href="https://github.com/paulovictorarmando/"
            target="_blank"
            rel="noopener"
            class="text-3xl hover:scale-110 transition-transform"
            title="GitHub"
          >
            🐙
          </a>
          <a
            href="https://linkedin.com/in/paulovictorarmando"
            target="_blank"
            rel="noopener"
            class="text-3xl hover:scale-110 transition-transform"
            title="LinkedIn"
          >
            💼
          </a>
          <a
            href="https://leetcode.com/u/paulovictorarmando/"
            target="_blank"
            rel="noopener"
            class="text-3xl hover:scale-110 transition-transform"
            title="LeetCode"
          >
            💻
          </a>
          <a
            href="https://www.instagram.com/paullo_armandoo/"
            target="_blank"
            rel="noopener"
            class="text-3xl hover:scale-110 transition-transform"
            title="Instagram"
          >
            📷
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

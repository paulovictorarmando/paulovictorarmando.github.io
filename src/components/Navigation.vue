<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const { t, locale } = useI18n();
const mobileMenuOpen = ref(false);

const toggleLanguage = () => {
  locale.value = locale.value === "pt" ? "en" : "pt";
  localStorage.setItem("language", locale.value);
};

const navLinks = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "certifications", label: "certifications" },
  { id: "profiles", label: "profiles" },
  { id: "contact", label: "contact" },
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    mobileMenuOpen.value = false;
  }
};
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 bg-gray-950 border-b border-gray-800 z-50">
    <div class="container-app flex items-center justify-between h-20">
      <!-- Logo -->
      <button
        @click="() => window.scrollTo({ top: 0, behavior: 'smooth' })"
        class="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent hover:from-blue-600 hover:to-cyan-600 cursor-pointer"
      >
        Paulo Armando
      </button>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <button
          v-for="link in navLinks"
          :key="link.id"
          @click="scrollToSection(link.id)"
          class="text-sm font-medium text-gray-400 hover:text-cyan-500 transition-colors"
        >
          {{ t(`nav.${link.label}`) }}
        </button>
      </div>

      <!-- Language Toggle -->
      <div class="flex items-center gap-3">
        <button
          @click="toggleLanguage"
          class="px-3 py-2 text-sm font-medium rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          :title="locale === 'pt' ? 'Switch to English' : 'Mudar para Português'"
        >
          {{ locale === "pt" ? "EN" : "PT" }}
        </button>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-800"
        >
          <span v-if="!mobileMenuOpen">☰</span>
          <span v-else>✕</span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden bg-gray-900 border-t border-gray-800"
    >
      <button
        v-for="link in navLinks"
        :key="link.id"
        @click="scrollToSection(link.id)"
        class="block w-full text-left px-4 py-3 text-sm font-medium text-gray-400 hover:text-cyan-500 hover:bg-gray-800 transition-colors"
      >
        {{ t(`nav.${link.label}`) }}
      </button>
    </div>
  </nav>

  <div class="h-20" />
</template>

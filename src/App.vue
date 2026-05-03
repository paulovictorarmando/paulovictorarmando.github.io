<script setup>
import { useI18n } from "vue-i18n";
import { useTheme } from "./composables/useTheme";
import Navigation from "./components/Navigation.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Certifications from "./components/Certifications.vue";
import Profiles from "./components/Profiles.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

const { locale } = useI18n();
const { isDarkMode } = useTheme();
</script>

<template>
  <div class="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
    <Navigation />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Profiles />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
</style>

<script setup>
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const mainTechs = [
  { name: "Python", icon: "🐍" },
  { name: "Django", icon: "⚙️" },
  { name: "Docker", icon: "🐳" },
  { name: "Django REST", icon: "🔌" },
];

const skills = ["APIs REST", "Systems", "DevOps", "Scalability"];
const features = [
  { label: locale === 'pt' ? 'APIs REST' : 'REST APIs', icon: '🔌' },
  { label: locale === 'pt' ? 'Auth' : 'Auth', icon: '🔐' },
  { label: locale === 'pt' ? 'DevOps' : 'DevOps', icon: '⚙️' },
  { label: locale === 'pt' ? 'Tests' : 'Tests', icon: '✅' },
];
</script>

<template>
  <section id="home" class="relative py-16 overflow-hidden">
    <!-- Animated background -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="container-app relative z-10">
      <div class="grid md:grid-cols-2 gap-6 items-center">
        <!-- Left Column -->
        <div class="space-y-4">
          <!-- Badge -->
          <span class="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 text-xs uppercase tracking-widest font-semibold">
            ✨ Backend Specialist
          </span>

          <!-- Headline -->
          <h2 class="text-2xl md:text-3xl font-bold leading-snug">
            <span class="text-white">
              {{ locale === "pt" ? "Construindo" : "Building" }}
            </span>
            <br />
            <span class="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {{ locale === "pt" ? "APIs Robustas" : "Robust APIs" }}
            </span>
          </h2>

          <!-- Description -->
          <p class="text-gray-300 text-sm leading-relaxed">
            {{ locale === "pt"
              ? "Backend Developer especializado em Python, Django REST Framework e sistemas escaláveis."
              : "Backend Developer specialized in Python, Django REST Framework and scalable systems."
            }}
          </p>

          <!-- Tech Stack -->
          <div class="pt-2">
            <p class="text-xs uppercase tracking-widest text-gray-500 mb-2">{{ locale === "pt" ? "Tech Stack" : "Tech Stack" }}</p>
            <div class="flex flex-wrap gap-2">
              <div
                v-for="tech in mainTechs"
                :key="tech.name"
                class="px-3 py-1.5 rounded-lg bg-gray-900/50 border border-cyan-500/30 hover:border-cyan-500 transition-all text-xs flex items-center gap-1.5"
              >
                <span class="text-base">{{ tech.icon }}</span>
                <span class="font-medium text-cyan-300">{{ tech.name }}</span>
              </div>
            </div>
          </div>

          <!-- Skills Pills -->
          <div class="flex flex-wrap gap-2 pt-2">
            <span
              v-for="skill in skills"
              :key="skill"
              class="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- Right Column -->
        <div class="space-y-3">
          <!-- Features Grid -->
          <div class="grid grid-cols-2 gap-3">
            <div v-for="item in features" :key="item.label" class="p-3 rounded-lg bg-gray-900/50 border border-cyan-500/20 hover:border-cyan-500/50 transition-all text-center group cursor-pointer">
              <div class="text-2xl mb-1 transform group-hover:scale-110 transition-transform">{{ item.icon }}</div>
              <p class="text-xs text-gray-400 group-hover:text-cyan-400">{{ item.label }}</p>
            </div>
          </div>

          <!-- Stats or Call to action -->
          <div class="grid grid-cols-3 gap-2 pt-2 border-t border-gray-800">
            <div class="text-center py-2">
              <p class="text-lg font-bold text-cyan-400">5+</p>
              <p class="text-xs text-gray-400">{{ locale === "pt" ? "Projetos" : "Projects" }}</p>
            </div>
            <div class="text-center py-2">
              <p class="text-lg font-bold text-cyan-400">5</p>
              <p class="text-xs text-gray-400">{{ locale === "pt" ? "Certs" : "Certs" }}</p>
            </div>
            <div class="text-center py-2">
              <p class="text-lg font-bold text-cyan-400">10+</p>
              <p class="text-xs text-gray-400">{{ locale === "pt" ? "Skills" : "Skills" }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  min-height: auto;
}
</style>

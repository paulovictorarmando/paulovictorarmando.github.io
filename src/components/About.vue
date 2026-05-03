<script setup>
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'

const { t, locale } = useI18n()

const ptHighlights = [
  'Experiência em Django REST Framework e arquitetura modular',
  'Testes automatizados com Pytest',
  'Docker e Nginx para containerização',
  'Forte base em estruturas de dados e algoritmos',
  'Sistemas concorrentes e programação de redes',
]

const enHighlights = [
  'Experience with Django REST Framework and modular architecture',
  'Automated testing with Pytest',
  'Docker and Nginx for containerization',
  'Strong foundation in data structures and algorithms',
  'Concurrent systems and network programming',
]

const highlights = ref(locale.value === 'pt' ? ptHighlights : enHighlights)

watch(locale, (newLocale) => {
  highlights.value = newLocale === 'pt' ? ptHighlights : enHighlights
})
</script>

<template>
  <section id="about" class="section bg-gray-900">
    <div class="container-app">
      <h2 class="section-title">{{ t('about.title') }}</h2>
      <p class="section-subtitle">{{ t('about.subtitle') }}</p>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Left Column -->
        <div class="text-left">
          <p class="text-gray-300 mb-6 leading-relaxed">
            {{ t('about.intro') }}
          </p>

          <div class="space-y-3 mb-8">
            <div v-for="(highlight, idx) in highlights" :key="idx" class="flex items-start">
              <span class="inline-block w-6 h-6 rounded-full bg-blue-600 dark:bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                <span class="text-white text-sm">✓</span>
              </span>
              <span class="ml-4 text-gray-300">{{ highlight }}</span>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="space-y-6">
          <div class="card">
            <h3 class="font-semibold text-lg mb-2 dark:text-white">📍 {{ t('contact.location') }}</h3>
            <p class="text-gray-400">Cacuaco, Luanda, Angola</p>
          </div>

          <div class="card">
            <h3 class="font-semibold text-lg mb-2 dark:text-white">✉️ {{ t('contact.email') }}</h3>
            <a href="mailto:paulovictorarmando@gmail.com" class="text-blue-600 dark:text-cyan-500 hover:underline break-all">
              paulovictorarmando@gmail.com
            </a>
          </div>

          <div class="card">
            <h3 class="font-semibold text-lg mb-2 dark:text-white">📱 {{ t('contact.phone') }}</h3>
            <a href="tel:+244940523444" class="text-blue-600 dark:text-cyan-500 hover:underline">
              +244 940 523 444
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

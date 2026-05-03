<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const year = t("footer.year");
</script>

<template>
  <footer class="bg-gray-950 border-t border-cyan-500/20 py-8">
    <div class="container-app text-center">
      <p class="text-lg font-medium text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text">
        {{ t("footer.madeBy") }}
        <span class="font-bold">Paulo Armando</span>
        <span class="text-cyan-400"> © {{ year }}</span>
      </p>
    </div>
  </footer>
</template>

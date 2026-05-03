import { ref } from "vue";

// Força modo escuro sempre
const isDarkMode = ref(true);

export function useTheme() {
  const toggleTheme = () => {
    // Desabilitado - sempre escuro
  };

  const applyTheme = () => {
    document.documentElement.classList.add("dark");
  };

  // Initialize theme immediately
  applyTheme();

  return {
    isDarkMode,
    toggleTheme,
  };
}

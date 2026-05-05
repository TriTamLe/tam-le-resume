import { ref } from "vue";

export type Theme = "light" | "dark";

const themeStorageKey = "tam-le-resume-theme";
const theme = ref<Theme>("light");

function getStoredTheme(): Theme | null {
  const storedTheme = window.localStorage.getItem(themeStorageKey);

  return storedTheme === "light" || storedTheme === "dark" ? storedTheme : null;
}

function getPreferredTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(nextTheme: Theme) {
  theme.value = nextTheme;
  document.documentElement.dataset.theme = nextTheme;
  document.documentElement.style.colorScheme = nextTheme;
}

export function initializeTheme() {
  applyTheme(getStoredTheme() ?? getPreferredTheme());
}

export function useTheme() {
  function setTheme(nextTheme: Theme) {
    window.localStorage.setItem(themeStorageKey, nextTheme);
    applyTheme(nextTheme);
  }

  function toggleTheme() {
    setTheme(theme.value === "dark" ? "light" : "dark");
  }

  return {
    theme,
    setTheme,
    toggleTheme,
  };
}

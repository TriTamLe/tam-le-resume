<script setup lang="ts">
import { Moon, Sun } from "@lucide/vue";
import { computed } from "vue";
import { useTheme } from "./hook";

const { theme, toggleTheme } = useTheme();

const isDarkTheme = computed(() => theme.value === "dark");
const toggleThemeLabel = computed(() =>
  isDarkTheme.value ? "Đổi sang giao diện sáng" : "Đổi sang giao diện tối",
);
</script>

<template>
  <div class="min-h-screen bg-primary-20 text-primary-90">
    <slot />

    <div class="fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6">
      <button
        class="flex size-12 items-center justify-center rounded-full border border-primary-60 bg-primary-10 text-primary-90 shadow-[0_10px_30px_color-mix(in_oklch,var(--primary-90)_18%,transparent)] transition-colors hover:bg-primary-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-60 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-20 active:scale-95"
        type="button"
        :aria-label="toggleThemeLabel"
        :aria-pressed="isDarkTheme"
        :title="toggleThemeLabel"
        @click="toggleTheme"
      >
        <Sun
          v-if="isDarkTheme"
          aria-hidden="true"
          class="size-5"
          :stroke-width="2"
        />
        <Moon v-else aria-hidden="true" class="size-5" :stroke-width="2" />
        <span class="sr-only">{{ toggleThemeLabel }}</span>
      </button>
    </div>
  </div>
</template>

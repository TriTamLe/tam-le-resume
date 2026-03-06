<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useI18n } from "vue-i18n";
import avatarDrawing from "./assets/images/avatar-drawing.png";
import avatarPicture from "./assets/images/avatar-picture.jpg";
import Badge from "./components/ui/Badge.vue";
import Button from "./components/ui/Button.vue";
import Card from "./components/ui/Card.vue";
import type { AppLocale } from "./i18n";

type Theme = "light" | "dark";
const activeTheme = ref<Theme>("light");
const showDrawing = ref(true);

const { t, locale } = useI18n();
const activeLang = ref<AppLocale>("vi");

watchEffect(() => {
  document.documentElement.setAttribute("data-theme", activeTheme.value);
});

watchEffect(() => {
  locale.value = activeLang.value;
});

const toggleTheme = () => {
  activeTheme.value = activeTheme.value === "light" ? "dark" : "light";
};

const toggleLang = () => {
  activeLang.value = activeLang.value === "vi" ? "en" : "vi";
};

const toggleAvatar = () => {
  showDrawing.value = !showDrawing.value;
};
</script>

<template>
  <main class="min-h-screen">
    <section class="min-h-screen flex flex-col">
      <header
        class="flex items-center gap-4 px-6 py-4 border-b border-primary-60 bg-primary-10/80 backdrop-blur"
      >
        <div class="flex-1">
          <span class="text-xl font-semibold">Tam Lê · Resume</span>
        </div>
        <div class="flex items-center gap-3">
          <Badge class="font-mono text-xs">
            {{ t('navbar.theme') }}: {{ activeTheme }}
          </Badge>
          <Badge class="font-mono text-xs">
            {{ t('navbar.lang') }}: {{ activeLang }}
          </Badge>
          <Button class="text-sm" @click="toggleTheme">
            {{ t('navbar.theme') }}
          </Button>
          <Button variant="outline" class="text-sm" @click="toggleLang">
            {{ activeLang === 'vi' ? 'English' : 'Tiếng Việt' }}
          </Button>
        </div>
      </header>

      <div class="flex flex-1 flex-col items-center px-6 py-12 gap-8">
        <div class="max-w-4xl w-full grid gap-6">
          <Card class="p-6">
            <div class="flex flex-col md:flex-row items-center gap-6">
              <div
                class="avatar-flip"
                role="button"
                tabindex="0"
                aria-label="Đổi ảnh avatar"
                @click="toggleAvatar"
                @keydown.enter.prevent="toggleAvatar"
                @keydown.space.prevent="toggleAvatar"
              >
                <div class="flip-inner" :class="{ 'is-flipped': showDrawing }">
                  <img
                    :src="avatarPicture"
                    alt="Ảnh chụp Tam Lê"
                    class="flip-face front"
                  />
                  <img
                    :src="avatarDrawing"
                    alt="Ảnh vẽ Tam Lê"
                    class="flip-face back"
                  />
                </div>
              </div>

              <div class="flex-1 flex flex-col gap-3">
                <div class="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">Vue 3</Badge>
                  <Badge variant="accent">Tailwind v4</Badge>
                  <Badge variant="default">shadcn</Badge>
                </div>
                <h1 class="text-3xl font-bold leading-tight">
                  {{ t('hero.title') }}
                </h1>
                <p class="text-primary-70">
                  {{ t('hero.body') }}
                </p>
                <div class="flex flex-wrap gap-3">
                  <Button>
                    {{ t('hero.primary') }}
                  </Button>
                  <Button variant="outline">
                    {{ t('hero.secondary') }}
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <div class="grid gap-4 md:grid-cols-3">
            <Card class="p-5">
              <div class="flex flex-col gap-2">
                <div
                  class="text-sm uppercase tracking-wide text-primary-70"
                >
                  {{ t('summary.heading') }}
                </div>
                <div class="text-lg font-semibold">
                  {{ t('summary.role') }}
                </div>
                <p class="text-sm text-primary-70">
                  {{ t('summary.desc') }}
                </p>
              </div>
            </Card>

            <Card class="p-5">
              <div class="flex flex-col gap-2">
                <div
                  class="text-sm uppercase tracking-wide text-primary-70"
                >
                  {{ t('tools.heading') }}
                </div>
                <div class="text-lg font-semibold">Vue · Vite · TypeScript</div>
                <p class="text-sm text-primary-70">
                  {{ t('tools.body') }}
                </p>
              </div>
            </Card>

            <Card class="p-5">
              <div class="flex flex-col gap-2">
                <div
                  class="text-sm uppercase tracking-wide text-primary-70"
                >
                  {{ t('status.heading') }}
                </div>
                <div class="text-lg font-semibold">Sẵn sàng nhận dự án</div>
                <p class="text-sm text-primary-70">
                  {{ t('status.body') }}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.avatar-flip {
  width: 180px;
  height: 180px;
  perspective: 1000px;
  cursor: pointer;
}

.flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border-radius: 50%;
}

.flip-inner.is-flipped {
  transform: rotateY(180deg);
}

.flip-face {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  backface-visibility: hidden;
  border-radius: 50%;
  border: 3px solid var(--primary-60);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.flip-face.back {
  transform: rotateY(180deg);
}
</style>

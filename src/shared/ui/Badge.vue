<script setup lang="ts">
import { computed } from "vue";
import cn from "../utils/cn";

type Variant = "default" | "secondary" | "accent" | "outline";

const props = defineProps<{
  variant?: Variant;
  class?: string;
}>();

const variants: Record<Variant, string> = {
  default: "bg-primary-30 text-primary-70 border-primary-60",
  secondary: "bg-green-70 text-primary-10 border-green-70",
  accent: "bg-blue-60 text-primary-10 border-blue-60",
  outline: "bg-transparent text-primary-90 border-primary-60",
};

const classes = computed(() =>
  cn(
    "inline-flex items-center rounded-full border px-2 py-1 text-xs font-semibold",
    variants[props.variant ?? "default"],
    props.class,
  ),
);
</script>

<template>
  <span
    :class="[classes, 'rounded-md']"
    :style="`border-width: calc(var(--border-width, 2px) - 0.5px);`"
  >
    <slot />
  </span>
</template>

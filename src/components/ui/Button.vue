<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/lib/utils";

type Variant = "default" | "secondary" | "outline" | "ghost" | "destructive";
type Size = "default" | "sm" | "lg" | "icon";

const props = defineProps<{
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
  class?: string;
}>();

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors border rounded-[var(--radius)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  default:
    "bg-secondary-70 text-primary-10 border-secondary-70 hover:brightness-105",
  secondary: "bg-green-70 text-primary-10 border-green-70 hover:brightness-105",
  outline:
    "bg-transparent text-primary-90 border-primary-60 hover:bg-primary-30",
  ghost:
    "bg-transparent text-primary-90 border-transparent hover:bg-primary-30",
  destructive: "bg-red-70 text-primary-10 border-red-70 hover:brightness-105",
};

const sizes: Record<Size, string> = {
  default: "h-10 px-4 py-2 text-sm",
  sm: "h-9 px-3 text-sm",
  lg: "h-11 px-6 text-base",
  icon: "h-10 w-10 p-0",
};

const classes = computed(() =>
  cn(
    base,
    variants[props.variant ?? "default"],
    sizes[props.size ?? "default"],
    props.class,
  ),
);
</script>

<template>
  <button :class="classes" :style="`border-width: var(--border-width, 2px);`">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

type Variant = 'default' | 'secondary' | 'accent' | 'outline'

const props = defineProps<{
  variant?: Variant
  class?: string
}>()

const variants: Record<Variant, string> = {
  default:
    'bg-[color:var(--muted)] text-[color:var(--muted-foreground)] border-[color:var(--border)]',
  secondary:
    'bg-[color:var(--secondary)] text-[color:var(--secondary-foreground)] border-[color:var(--secondary)]',
  accent:
    'bg-[color:var(--accent)] text-[color:var(--accent-foreground)] border-[color:var(--accent)]',
  outline:
    'bg-transparent text-[color:var(--foreground)] border-[color:var(--border)]',
}

const classes = computed(() =>
  cn(
    'inline-flex items-center rounded-full border px-2 py-1 text-xs font-semibold',
    variants[props.variant ?? 'default'],
    props.class,
  ),
)
</script>

<template>
  <span
    :class="[classes, 'rounded-[var(--radius)]']"
    :style="`border-width: calc(var(--border-width, 2px) - 0.5px);`"
  >
    <slot />
  </span>
</template>

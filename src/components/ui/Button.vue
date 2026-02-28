<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

type Variant = 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive'
type Size = 'default' | 'sm' | 'lg' | 'icon'

const props = defineProps<{
  variant?: Variant
  size?: Size
  asChild?: boolean
  class?: string
}>()

const base =
  'inline-flex items-center justify-center gap-2 font-medium transition-colors border rounded-[var(--radius)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

const variants: Record<Variant, string> = {
  default:
    'bg-[color:var(--primary)] text-[color:var(--primary-foreground)] border-[color:var(--primary)] hover:brightness-105',
  secondary:
    'bg-[color:var(--secondary)] text-[color:var(--secondary-foreground)] border-[color:var(--secondary)] hover:brightness-105',
  outline:
    'bg-transparent text-[color:var(--foreground)] border-[color:var(--border)] hover:bg-[color:var(--muted)]',
  ghost: 'bg-transparent text-[color:var(--foreground)] border-transparent hover:bg-[color:var(--muted)]',
  destructive:
    'bg-[color:var(--destructive)] text-[color:var(--destructive-foreground)] border-[color:var(--destructive)] hover:brightness-105',
}

const sizes: Record<Size, string> = {
  default: 'h-10 px-4 py-2 text-sm',
  sm: 'h-9 px-3 text-sm',
  lg: 'h-11 px-6 text-base',
  icon: 'h-10 w-10 p-0',
}

const classes = computed(() =>
  cn(
    base,
    variants[props.variant ?? 'default'],
    sizes[props.size ?? 'default'],
    props.class,
  ),
)
</script>

<template>
  <button :class="classes" :style="`border-width: var(--border-width, 2px);`">
    <slot />
  </button>
</template>

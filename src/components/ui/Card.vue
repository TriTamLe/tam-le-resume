<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <div
    :class="
      cn(
        'border bg-[color:var(--card)] text-[color:var(--card-foreground)] shadow-none rounded-[var(--radius)]',
        props.class,
      )
    "
    :style="`border-color: var(--border); border-width: var(--border-width, 2px);`"
  >
    <slot />
  </div>
</template>

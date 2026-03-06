<script setup lang="ts">
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div
    :class="
      cn(
        'border bg-primary-10 text-primary-90 shadow-none rounded-md',
        props.class,
      )
    "
    :style="`border-color: var(--primary-60); border-width: var(--border-width, 2px);`"
  >
    <slot />
  </div>
</template>

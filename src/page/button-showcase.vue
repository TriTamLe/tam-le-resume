<script setup lang="ts">
import { briefcasePlus, floppyDisk, tabArrowUpRight } from "@lucide/lab";
import Button from "../shared/ui/Button.vue";

type Variant = "primary" | "secondary" | "link";
type ButtonType = "normal" | "red" | "blue" | "green";
type Size = "large" | "default" | "small";

const variants: Array<{
  value: Variant;
  title: string;
  description: string;
}> = [
  {
    value: "primary",
    title: "Primary",
    description: "Filled with outline. Use for the strongest action.",
  },
  {
    value: "secondary",
    title: "Secondary",
    description: "Filled without visible outline. Use for supporting actions.",
  },
  {
    value: "link",
    title: "Link",
    description: "Transparent and lightweight. Use for quiet actions.",
  },
];

const types: Array<{
  value: ButtonType;
  label: string;
}> = [
  { value: "normal", label: "Normal" },
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
];

const sizes: Array<{
  value: Size;
  label: string;
  note: string;
}> = [
  { value: "large", label: "Large", note: "min 48px tall" },
  { value: "default", label: "Default", note: "min 36px tall" },
  { value: "small", label: "Small", note: "min 24px tall" },
];
</script>

<template>
  <main class="min-h-screen bg-primary-20 text-primary-90">
    <section class="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-8">
      <header class="flex flex-col gap-2 border-b border-primary-60 pb-5">
        <p class="text-sm font-medium uppercase tracking-wide text-primary-70">
          UI Component Demo
        </p>
        <h1 class="text-3xl font-semibold leading-tight">
          Button variants, types, states, and sizes
        </h1>
      </header>

      <section class="grid gap-6">
        <article
          v-for="variant in variants"
          :key="variant.value"
          class="grid gap-4 border-b border-primary-40 pb-6"
        >
          <div class="flex flex-col gap-1">
            <h2 class="text-xl font-semibold">
              {{ variant.title }}
            </h2>
            <p class="max-w-2xl text-sm text-primary-70">
              {{ variant.description }}
            </p>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full min-w-190 border-collapse text-left">
              <thead>
                <tr class="border-b border-primary-50 text-xs text-primary-70">
                  <th class="w-28 py-3 pr-4 font-medium">Type</th>
                  <th class="py-3 pr-4 font-medium">Idle</th>
                  <th class="py-3 pr-4 font-medium">Disabled</th>
                  <th class="py-3 pr-4 font-medium">Icon before</th>
                  <th class="py-3 pr-4 font-medium">Icon after</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="buttonType in types"
                  :key="buttonType.value"
                  class="border-b border-primary-30 last:border-b-0"
                >
                  <th class="py-4 pr-4 text-sm font-medium">
                    {{ buttonType.label }}
                  </th>
                  <td class="py-4 pr-4">
                    <Button :variant="variant.value" :type="buttonType.value">
                      Button
                    </Button>
                  </td>
                  <td class="py-4 pr-4">
                    <Button
                      :variant="variant.value"
                      :type="buttonType.value"
                      disabled
                    >
                      Button
                    </Button>
                  </td>
                  <td class="py-4 pr-4">
                    <Button
                      :icon="briefcasePlus"
                      :variant="variant.value"
                      :type="buttonType.value"
                    >
                      Add
                    </Button>
                  </td>
                  <td class="py-4 pr-4">
                    <Button
                      :icon="tabArrowUpRight"
                      icon-position="after"
                      :variant="variant.value"
                      :type="buttonType.value"
                    >
                      Next
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </section>

      <section class="grid gap-4 pb-8">
        <div class="flex flex-col gap-1">
          <h2 class="text-xl font-semibold">Sizes</h2>
          <p class="max-w-2xl text-sm text-primary-70">
            Each size keeps the same layout structure, centered content, and
            icon spacing.
          </p>
        </div>

        <div class="flex flex-wrap items-end gap-5">
          <div
            v-for="buttonSize in sizes"
            :key="buttonSize.value"
            class="flex flex-col gap-2"
          >
            <span class="text-xs font-medium text-primary-70">
              {{ buttonSize.label }} / {{ buttonSize.note }}
            </span>
            <Button :size="buttonSize.value">Auto width</Button>
          </div>
        </div>

        <div class="flex flex-col gap-2 pt-2">
          <span class="text-xs font-medium text-primary-70">
            Icon-only example
          </span>
          <Button :icon="floppyDisk" aria-label="Save item" class="w-9" />
        </div>
      </section>
    </section>
  </main>
</template>

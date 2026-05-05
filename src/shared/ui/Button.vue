<script setup lang="ts">
import type { IconNode } from "@lucide/vue";
import { Icon } from "@lucide/vue";
import { computed } from "vue";
import cn from "../utils/cn";

type Variant = "primary" | "secondary" | "link";
type ButtonType = "normal" | "red" | "blue" | "green";
type Size = "large" | "default" | "small";
type HtmlType = "button" | "submit" | "reset";
type IconPosition = "before" | "after";

const props = withDefaults(
  defineProps<{
    variant?: Variant;
    type?: ButtonType;
    size?: Size;
    htmlType?: HtmlType;
    icon?: IconNode;
    iconPosition?: IconPosition;
    disabled?: boolean;
    class?: string;
  }>(),
  {
    variant: "primary",
    type: "normal",
    size: "default",
    htmlType: "button",
    iconPosition: "before",
  },
);

const base =
  "inline-flex cursor-pointer flex-row items-center justify-center gap-2 rounded-[5px] border font-normal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-60 focus-visible:ring-offset-2 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  large: "min-h-[48px] px-5 py-3 text-[18px] leading-[22px]",
  default: "min-h-[36px] px-3.5 py-2 text-[14px] leading-[17px]",
  small: "min-h-[24px] px-2 py-1 text-[10px] leading-[12px]",
};

const iconSizes: Record<Size, number> = {
  large: 18,
  default: 14,
  small: 10,
};

const primaryStyles: Record<ButtonType, string> = {
  normal:
    "bg-primary-10 text-primary-90 border-primary-90 hover:bg-primary-30 disabled:bg-primary-40 disabled:text-primary-60 disabled:border-primary-60",
  red: "bg-red-40 text-red-90 border-red-90 hover:bg-red-50 disabled:bg-red-40 disabled:text-primary-60 disabled:border-primary-60",
  blue: "bg-blue-40 text-blue-90 border-blue-90 hover:bg-blue-50 disabled:bg-blue-40 disabled:text-primary-60 disabled:border-primary-60",
  green:
    "bg-green-40 text-green-90 border-green-90 hover:bg-green-50 disabled:bg-green-40 disabled:text-primary-60 disabled:border-primary-60",
};

const secondaryStyles: Record<ButtonType, string> = {
  normal:
    "bg-primary-40 text-primary-90 border-transparent hover:bg-primary-50 disabled:bg-primary-30 disabled:text-primary-60",
  red: "bg-red-40 text-red-90 border-transparent hover:bg-red-50 disabled:bg-red-40 disabled:text-primary-60",
  blue: "bg-blue-40 text-blue-90 border-transparent hover:bg-blue-50 disabled:bg-blue-40 disabled:text-primary-60",
  green:
    "bg-green-40 text-green-90 border-transparent hover:bg-green-50 disabled:bg-green-40 disabled:text-primary-60",
};

const linkStyles: Record<ButtonType, string> = {
  normal:
    "bg-transparent text-primary-90 border-transparent hover:bg-primary-30 disabled:bg-transparent disabled:text-primary-60",
  red: "bg-transparent text-red-60 border-transparent hover:text-red-70 disabled:bg-transparent disabled:text-red-40",
  blue: "bg-transparent text-blue-60 border-transparent hover:text-blue-70 disabled:bg-transparent disabled:text-blue-40",
  green:
    "bg-transparent text-green-60 border-transparent hover:text-green-70 disabled:bg-transparent disabled:text-green-40",
};

const variants: Record<Variant, Record<ButtonType, string>> = {
  primary: primaryStyles,
  secondary: secondaryStyles,
  link: linkStyles,
};

const classes = computed(() =>
  cn(base, sizes[props.size], variants[props.variant][props.type], props.class),
);
</script>

<template>
  <button :class="classes" :type="htmlType" :disabled="disabled">
    <Icon
      v-if="icon && iconPosition === 'before'"
      aria-hidden="true"
      class="shrink-0"
      :iconNode="icon"
      :name="`${variant}-${type}-button-icon`"
      :size="iconSizes[size]"
      :stroke-width="2"
    />
    <slot />
    <Icon
      v-if="icon && iconPosition === 'after'"
      aria-hidden="true"
      class="shrink-0"
      :iconNode="icon"
      :name="`${variant}-${type}-button-icon`"
      :size="iconSizes[size]"
      :stroke-width="2"
    />
  </button>
</template>

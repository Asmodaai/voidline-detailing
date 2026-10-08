<script setup>
defineProps({
  direction: { type: String, default: "diagonal" },
});
</script>

<template>
  <svg
    class="ui-arrow"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="square"
    stroke-linejoin="miter"
    aria-hidden="true"
    focusable="false"
  >
    <path v-if="direction === 'diagonal'" d="M5 19 19 5M10 5h9v9" />
    <path v-else-if="direction === 'down'" d="M12 4v16M5 13l7 7 7-7" />
    <path v-else-if="direction === 'up'" d="M12 20V4M5 11l7-7 7 7" />
    <path v-else-if="direction === 'horizontal'" d="M4 12h16M8 8l-4 4 4 4M16 8l4 4-4 4" />
    <path v-else-if="direction === 'chevrons'" d="m9 8-4 4 4 4m6-8 4 4-4 4" />
  </svg>
</template>

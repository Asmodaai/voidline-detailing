<script setup>
defineProps({
  photo: { type: Object, required: true },
  sizes: { type: String, required: true },
  priority: { type: Boolean, default: false },
  decorative: { type: Boolean, default: false },
});
</script>

<template>
  <img
    class="photograph"
    :src="photo.src"
    :srcset="photo.srcset"
    :sizes="sizes"
    :width="photo.width"
    :height="photo.height"
    :alt="decorative ? '' : photo.alt"
    :loading="priority ? 'eager' : 'lazy'"
    :fetchpriority="priority ? 'high' : 'auto'"
    decoding="async"
  />
</template>

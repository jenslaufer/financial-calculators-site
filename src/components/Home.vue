<template>
  <div class="flex flex-col w-sreen h-screen justify-center items-center">
    <h1 class="text-4xl font-bold mb-8">{{ headline }}
    </h1>
    <p class="text-xl mb-3">{{ uvp }}</p>
  </div>
</template>
<script setup>
const props = defineProps({
  headline: {
    type: String,
    required: true
  },
  uvp: {
    type: String,
    required: true
  }
});
</script>

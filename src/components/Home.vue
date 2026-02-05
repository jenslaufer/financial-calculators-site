<template>
  <div class="flex flex-col w-screen h-screen justify-center items-center">

    <h1 class="text-3xl bg-amber-500 font-bold mb-8">{{ headline }}
    </h1>
    <p class="text-lg mb-3">{{ uvp }}</p>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
      {{ cta }}
    </button>
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
  },
  cta:
  {
    type: String,
    required: false,
    default: 'Get Started'
  }
});
</script>

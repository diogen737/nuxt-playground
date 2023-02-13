<script setup lang="ts">
useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});

const counter = useCounter();
</script>

<template>
  <div class="grid gap-5">
    <div class="">
      <span class="text-emerald-400">home is fully custom</span>
    </div>

    <div class="">
      <h4 class="font-medium pb-4">working with stores:</h4>
      <span>Count: {{ counter.n }}</span>

      <div class="flex flex-row gap-4 mt-3">
        <button
          type="button"
          class="rounded-md py-1 px-3 bg-emerald-600 hover:bg-emerald-700"
          @click="counter.increment()"
        >
          Increment
        </button>

        <button
          type="button"
          class="rounded-md py-1 px-3 bg-emerald-600 hover:bg-emerald-700"
          @click="counter.increment(10)"
        >
          Add 10
        </button>

        <button
          type="button"
          class="rounded-md py-1 px-3 bg-emerald-600 hover:bg-emerald-700"
          @click="counter.decrementToZero(1)"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
</template>

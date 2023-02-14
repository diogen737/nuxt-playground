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
  <div class="grid gap-16">
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

    <div class="">
      <h4 class="font-medium pb-4">working with icons:</h4>

      <div class="flex flex-row gap-4 mt-3">
        <Icon :name="'uil:calender'" :size="'40px'"></Icon>
        <Icon :name="'uil:calender'" :size="'20px'"></Icon>
        <Icon :name="'uil:calender'" :size="'10px'"></Icon>

        <Icon :name="'mdi:unreal'" :size="'40px'"></Icon>
        <Icon :name="'mdi:unreal'" :size="'20px'"></Icon>
        <Icon :name="'mdi:unreal'" :size="'10px'"></Icon>
      </div>
    </div>

    <div class="">
      <h4 class="font-medium pb-4">working with theme:</h4>

      <h1>Color mode: {{ $colorMode.preference }}</h1>

      <button class="p-2" @click="$colorMode.preference = $colorMode.preference === 'light' ? 'dark' : 'light'">
        <Icon :name="$colorMode.preference === 'light' ? 'ri:moon-line' : 'ri:sun-line'" :size="'40px'" class="mt-2"></Icon>
      </button>
    </div>

    <div class="">
      <h4 class="font-medium pb-4">working with images:</h4>

      <p class="mb-2">sizes + webp</p>
      <nuxt-img src="/test.jpg" format="webp" :quality="80" sizes="sm:100vw md:50vw lg:400px" />

      <p class="my-2">fit</p>
      <nuxt-img src="/test.jpg" height="100" width="100" fit="inside" />
    </div>
  </div>
</template>

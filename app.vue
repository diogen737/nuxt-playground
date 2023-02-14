<script setup lang="ts"></script>

<template>
  <div class="min-h-screen">
    <AppHeader />

    <div class="mx-4 py-6 space-y-10">
      <div class="px-6">(APP CONTENT)</div>
      <hr />
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" class="px-6" />
      <hr />
    </div>

    <AppFooter />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.15s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

<template>
  <div class="min-h-screen text-gray-50 bg-gray-900">
    <AppHeader />

    <div class="p-6 space-y-10">
      <div>(APP CONTENT)</div>
      <hr />
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
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

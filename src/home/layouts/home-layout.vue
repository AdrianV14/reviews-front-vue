<script setup lang="ts">
import HomeNavbar from '../components/home-navbar.vue'
</script>

<template>
  <HomeNavbar />
  <main class="container mx-auto py-6">
    <RouterView/>
  </main>
</template>

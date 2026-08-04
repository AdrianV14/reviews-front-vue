<script setup lang="ts">
defineProps<{
  rating: Number
}>()
</script>

<template>
  <div class="rating rating-xs">
    <div
      v-for="n in 5"
      :key="n"
      class="mask mask-star bg-orange-300"
      :aria-label="`star-${n}`"
      :aria-current="n === rating"
    ></div>
  </div>
</template>

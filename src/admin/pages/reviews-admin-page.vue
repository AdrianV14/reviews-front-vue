<template>
  <h1 class="text-2xl font-bold">Lista de reseñas</h1>
  <h3 class="text-lg">
    Total de reseñas <span class="text-accent">{{ reviews.length }}</span>
  </h3>

  <div class="divider"></div>
  <div class="flex gap-2 items-center h-20">
    <div class="flex-1"></div>
    <RouterLink class="btn btn-secondary" :to="{ name: 'admin-review-page', params: { id: 'new' } }"
      >Nuevo producto</RouterLink
    >
  </div>
  <ReviewTable :reviews="reviews" />
</template>

<script setup lang="ts">
import ReviewTable from '@/reviews/components/review-table.vue'
import type { Review } from '@/reviews/interfaces/review-interface'
import { getReviews } from '@/reviews/services/review'
import { onMounted, ref } from 'vue'

const reviews = ref<Review[]>([])

onMounted(async () => {
  reviews.value = await getReviews()
})
</script>

<template>
  <h1 class="text-3xl font-bold">Todas las reseñas</h1>
  <div v-if="reviews" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 gap-5">
    <ReviewCard v-for="review in reviews" :key="review.id" :review="review"/>
  </div>

  <h2 v-else class="text-2xl font-bold py-6 text-center text-error">
    ¡No hay reseñas por mostrar!
  </h2>
</template>

<script setup lang="ts">
import ReviewCard from '@/reviews/components/review-card.vue'
import type { Review } from '@/reviews/interfaces/review-interface'
import { getReviews } from '@/reviews/services/review'
import { onMounted, ref } from 'vue'

const reviews = ref<Review[]>([])

onMounted(async () => {
  reviews.value = await getReviews()
})
</script>

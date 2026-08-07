<template>
  <div class="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ review.name }}</h2>
      <RatingStars :rating="review.rating" />
      <p>
        {{ review.description }}
      </p>
      <div class="card-actions justify-end">
        <button class="btn btn-secondary">Ver más...</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RatingStars from '@/shared/components/rating-stars.vue'
import type { Review } from '../interfaces/review-interface'

defineProps<{
  review: Review
}>()
</script>

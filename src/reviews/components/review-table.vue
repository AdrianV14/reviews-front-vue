<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Calificacion</th>
          <th>Categoria</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->

        <tr v-for="review in reviews" :key="review.id">
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle h-12 w-12">
                  <!-- <img [src]="product.images | productImage" [alt]="product.title" /> -->
                </div>
              </div>
              <div>
                <RouterLink
                  class="hover:underline"
                  :to="{ name: 'admin-review-page', params: { id: review.id } }"
                  >{{ review.name }}</RouterLink
                >
              </div>
            </div>
          </td>
          <td>
            {{ review.rating }}
            <br />
          </td>
          <td>
            {{ review.categoryId }}
          </td>
          <th>
            <RouterLink
              :to="{ name: 'admin-review-page', params: { id: review.id } }"
              class="btn btn-md btn-ghost text-accent"
              >Detalles
            </RouterLink>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { Review } from '../interfaces/review-interface'

defineProps<{
  reviews: Review[]
}>()
</script>

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
                  <img :src="review.coverImage" :alt="review.name" />
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
          <th class="flex justify-end">
            <RouterLink
              :to="{ name: 'admin-review-page', params: { id: review.id } }"
              class="btn btn-md btn-ghost text-accent"
              >Detalles
            </RouterLink>

            <button
              @click="handleDelete(review.id)"
              type="button"
              class="btn btn-md btn-ghost text-primary"
            >
              Eliminar
            </button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { Review } from '../interfaces/review-interface'
import { useToast } from 'vue-toastification'
import { deleteReview } from '../services/review'
defineProps<{
  reviews: Review[]
}>()

const emit = defineEmits<{
  reviewDelete: []
}>()

const toast = useToast()

const handleDelete = async (id: string) => {
  const confirmed = confirm('¿Estás seguro de que deseas eliminar esta reseña?')
  if (!confirmed) return

  try {
    const response = await deleteReview(id)
    console.log(response)
    toast.success(response)
    emit('reviewDelete')
  } catch {
    toast.error('Error al eliminar la reseña')
  }
}
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>Categoría</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->

        <tr v-for="category in categories" :key="category.id">
          <td>
            <div class="flex items-center gap-3">
              <div>
                <RouterLink
                  class="hover:underline"
                  :to="{ name: 'admin-category-page', params: { id: category.id } }"
                  >{{ category.name }}</RouterLink
                >
              </div>
            </div>
          </td>
          <th class="flex justify-end">
            <RouterLink
              :to="{ name: 'admin-category-page', params: { id: category.id } }"
              class="btn btn-md btn-ghost text-accent"
              >Detalles
            </RouterLink>

            <button
              @click="handleDelete(category.id)"
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
import type { Category } from '../interfaces/category-interface'
import { deleteCategory } from '../services/category'
defineProps<{
  categories: Category[]
}>()

const emit = defineEmits<{
  categoryDeleted: []
}>()

const handleDelete = async (id: string) => {
  const confirmed = confirm('¿Estás seguro de que deseas eliminar esta categoría?')

  if (!confirmed) return

  try {
    const response = await deleteCategory(id)
    console.log(response)
    emit('categoryDeleted')
  } catch {
    console.log('error')
  }
}
</script>

<template>
  <h1 class="text-2xl font-bold">Lista de categorías</h1>
  <h3 class="text-lg">
    Total de categorías: <span class="text-accent">{{ categories.length }}</span>
  </h3>

  <div class="divider"></div>
  <div class="flex gap-2 items-center h-20">
    <div class="flex-1"></div>
    <RouterLink
      class="btn btn-secondary"
      :to="{ name: 'admin-category-page', params: { id: 'new' } }"
      >Nuevo Categoría</RouterLink
    >
  </div>
  <CategoryTable :categories="categories" @category-deleted="loadCategories" />
</template>

<script setup lang="ts">
import CategoryTable from '@/categories/components/category-table.vue'
import type { Category } from '@/categories/interfaces/category-interface'
import { getCategories } from '@/categories/services/category'
import { onMounted, ref } from 'vue'

const categories = ref<Category[]>([])

onMounted(() => {
  loadCategories()
})

const loadCategories = async () => {
  categories.value = await getCategories()
}
</script>

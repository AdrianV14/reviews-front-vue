<template>
  <div class="max-lg:collapse bg-base-200 shadow-sm w-full rounded-md">
    <input id="navbar-1-toggle" class="peer hidden" type="checkbox" />
    <label for="navbar-1-toggle" class="fixed inset-0 hidden max-lg:peer-checked:block"></label>
    <div class="collapse-title navbar">
      <div class="navbar-start">
        <label for="navbar-1-toggle" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <button class="btn btn-ghost text-xl">Reviews</button>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Categorias</summary>
              <ul class="p-2 bg-base-100 w-40 z-1">
                <li v-for="category of categories" :key="category.id">
                  <button>{{ category.name }}</button>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <input type="text" placeholder="Search" class="input w-64 lg:w-auto" />
      </div>
    </div>

    <div class="collapse-content lg:hidden z-1">
      <ul class="menu">
        <li>
          <button>Categorias</button>
          <ul>
            <li v-for="category of categories" :key="category.id">
              <button>{{ category.name }}</button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Category } from '@/categories/interfaces/category-interface'
import { getCategories } from '@/categories/services/category'
import { onMounted, ref } from 'vue'

const categories = ref<Category[]>([])

onMounted(async () => {
  categories.value = await getCategories()
})
</script>

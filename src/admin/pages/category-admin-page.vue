<template>
  <h1 v-if="idParam !== 'new'" class="text-2xl font-bold">{{ title }}</h1>
  <div class="divider"></div>

  <form class="grid grid-cols-1 sm:grid-cols-2 gap-4" @submit.prevent="handleSubmit()">
    <div class="flex flex-col gap-2">
      <h2 class="text-2xl font-bold h-12">Datos de la categoría</h2>
      <label for="name" class="label text-gray-300">Nombre de la categoría:</label>
      <input
        v-model="form.name"
        placeholder="Ej. Restaurante"
        type="text"
        name="name"
        id="name"
        class="input input-bordered w-lg"
        required
      />
    </div>
    <div class="flex justify-end">
      <button class="btn btn-secondary" type="submit">Guardar</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { createCategory, getCategory, updateCategory } from '@/categories/services/category'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
const toast = useToast()
const router = useRouter()
const route = useRoute()
const idParam = route.params.id as string
const title = ref('')
const form = ref({
  name: '',
})

onMounted(async () => {
  if (idParam === 'new') return
  const category = await getCategory(idParam)
  title.value = category.name

  form.value = {
    name: category.name,
  }
})

const handleSubmit = async () => {
  if (form.value.name === '') return

  try {
    if (idParam === 'new') {
      //Create
      await createCategory(form.value.name)
    } else {
      //Update
      await updateCategory(idParam, form.value.name)
    }
    toast.success(
      idParam === 'new' ? 'Categoría creada correctamente' : 'Categoría actualizada correctamente',
    )
    router.push({ name: 'admin-categories-page' })
  } catch {
    toast.error('Error de servidor. Intenta de nuevo.')
  }
}
</script>

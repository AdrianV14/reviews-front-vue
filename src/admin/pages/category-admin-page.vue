<template>
  <h1 v-if="idParam !== 'new'" class="text-2xl font-bold">{{ title}}</h1>
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

const router = useRouter()
const route = useRoute()
const idParam = route.params.id as string
const title = ref('');
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
  let response;
  if (idParam === 'new') {
    //Create
    response = await createCategory(form.value.name)
  } else {
    //Update
    response = await updateCategory( idParam ,form.value.name)
  }

  //Toast pendiente
  console.log(response);
  router.push({ name: 'admin-categories-page' })
}
</script>

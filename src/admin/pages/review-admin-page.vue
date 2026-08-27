<template>
  <h1 v-if="idParam !== 'new'" class="text-2xl font-bold">{{ title }}</h1>
  <div class="divider"></div>

  <form class="grid grid-cols-1 sm:grid-cols-2 gap-4" @submit.prevent="handleSubmit()">
    <div class="flex flex-col gap-2">
      <h2 class="text-2xl font-bold h-12">Datos de la reseña</h2>
      <label for="name" class="label text-gray-300">Nombre:</label>
      <input
        v-model="form.name"
        placeholder="Nombre del establecimiento."
        type="text"
        name="name"
        id="name"
        class="input input-bordered w-full"
        required
      />
      <label for="rating" class="label text-gray-300">Rating:</label>
      <input
        v-model="form.rating"
        placeholder="Calificación del establecimiento."
        type="number"
        min="1"
        max="5"
        name="rating"
        id="rating"
        class="input input-bordered w-full"
        required
      />
      <label for="description" class="label text-gray-300">Descripción:</label>
      <textarea
        v-model="form.description"
        name="description"
        id="description"
        placeholder="Descripción del establecimiento"
        rows="6"
        class="textarea textarea-bordered w-full"
        required
      ></textarea>

      <label for="address" class="label text-gray-300">Dirección: </label>
      <input
        v-model="form.address"
        placeholder="Dirección del establecimiento."
        type="text"
        name="address"
        id="address"
        class="input input-bordered w-full"
        required
      />

      <label for="latitud" class="label text-gray-300">Latitud:</label>
      <input
        v-model="form.latitude"
        placeholder="Latitud del establecimiento."
        type="number"
        name="latitud"
        id="latitud"
        class="input input-bordered w-full"
        required
      />
      <label for="longitud" class="label text-gray-300">Longitud:</label>
      <input
        v-model="form.longitude"
        placeholder="Longitud del establecimiento."
        type="number"
        name="longitud"
        id="longitud"
        class="input input-bordered w-full"
        required
      />
      <label for="categoryId" class="label text-gray-300">Categoria:</label>
      <select
        name="categoryId"
        id="categoryId"
        class="select select-bordered w-full"
        v-model="form.categoryId"
      >
        <option value="" disabled>Selecciona una categoría</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{ category.name }}
        </option>
      </select>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex justify-end h-8">
        <button class="btn btn-secondary" type="submit">Guardar</button>
      </div>

      <input
        type="file"
        accept="image/*"
        @change="handleImage($event)"
        class="file-input file-input-bordered w-full mt-4"
      />

      <div v-if="imagePreview">
        <img :src="imagePreview" alt="Temporal image" class="w-full max-h-100 object-contain" />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { Category } from '@/categories/interfaces/category-interface'
import { getCategories } from '@/categories/services/category'
import { getReviewById, updateReview, createReview } from '@/reviews/services/review'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const route = useRoute()
const router = useRouter()
const toast = useToast()
const idParam = route.params.id as string
const categories = ref<Category[]>([])
const title = ref('')
const imagePreview = ref<string | null>(null)
const image = ref<File | null>(null)
const form = ref({
  name: '',
  rating: 0,
  description: '',
  address: '',
  latitude: 0,
  longitude: 0,
  categoryId: '',
})

onMounted(async () => {
  categories.value = await getCategories()

  if (idParam === 'new') return

  const review = await getReviewById(idParam)

  title.value = review.name
  imagePreview.value = review.coverImage

  form.value = {
    name: review.name || '',
    rating: review.rating || 1,
    description: review.description || '',
    address: review.address || '',
    latitude: review.latitude || 0,
    longitude: review.longitude || 0,
    categoryId: review.categoryId,
  }
})

const handleImage = (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]

  if (!file) return

  image.value = file
  imagePreview.value = URL.createObjectURL(file)
}

const handleSubmit = async () => {
  const formData = new FormData()

  formData.append('name', form.value.name)
  formData.append('rating', form.value.rating.toString())
  formData.append('description', form.value.description)
  formData.append('address', form.value.address)
  formData.append('latitude', form.value.latitude.toString())
  formData.append('longitude', form.value.longitude.toString())
  formData.append('categoryId', form.value.categoryId)

  if (image.value) {
    formData.append('coverImage', image.value)
  }

  try {
    if (idParam === 'new') {
      //create
      await createReview(formData)
    } else {
      //Update - manejar si cambio imagen o no
      await updateReview(idParam, formData)
    }
    toast.success(
      idParam === 'new' ? 'Reseña creada correctamente' : 'Reseña actualizada correctamente',
    )
    router.push({ name: 'admin-reviews-page' })
  } catch {
    toast.error('Error de servidor. Intenta de nuevo.')
  }
}
</script>

import api from '@/shared/services/api'
import type { Category } from '../interfaces/category-interface'

const getCategories = async (): Promise<Category[]> => {
  const response = await api.get('/categories')
  return response.data.data
}

const getCategory = async (id: string): Promise<Category> => {
  const response = await api.get(`/categories/${id}`)
  return response.data.data
}

const createCategory = async (name: string): Promise<Category> => {
  const response = await api.post('/categories', {
    name: name,
  })
  return response.data
}

const deleteCategory = async (id: string): Promise<string> => {
  const response = await api.delete(`/categories/${id}`)
  return response.data.data
}

export { getCategories, getCategory, createCategory, deleteCategory }

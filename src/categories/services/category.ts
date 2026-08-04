import api from '@/shared/services/api'
import type { Category } from '../interfaces/category-interface'

const getCategories = async (): Promise<Category[]> => {
  const response = await api.get('/categories')
  console.log(response.data.data)
  return response.data.data
}

export { getCategories }

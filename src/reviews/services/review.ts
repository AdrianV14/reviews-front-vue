import api from '@/shared/services/api'
import type { Review } from '../interfaces/review-interface'

const getReviews = async (): Promise<Review[]> => {
  const response = await api.get('/reviews')
  return response.data.data
}

const getReviewsByCategory = async (id: string): Promise<Review[]> => {
  const response = await api.get(`/reviews/category/${id}`)
  console.log(response.data.data)
  return response.data.data
}

export { getReviews, getReviewsByCategory }

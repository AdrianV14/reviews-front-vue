import api from '@/shared/services/api'
import type { Review } from '../interfaces/review-interface'

const getReviews = async (): Promise<Review[]> => {
  const response = await api.get('/reviews')
  return response.data.data
}

const getReviewsByCategory = async (id: string): Promise<Review[]> => {
  const response = await api.get(`/reviews/category/${id}`)
  return response.data.data
}

const getReviewById = async (id: string): Promise<Review> => {
  const response = await api.get(`/reviews/${id}`)
  return response.data.data
}

const createReview = async (data: FormData): Promise<Review> => {
  const response = await api.post<Review>('/reviews', data)
  return response.data
}

const updateReview = async (id: string, data: FormData): Promise<Review> => {
  const response = await api.post<Review>(`/reviews/${data}`, data)
  return response.data
}

const deleteReview = async (id: string): Promise<string> => {
  const response = await api.delete(`/reviews/${id}`)
  return response.data.message
}

export { getReviews, getReviewsByCategory, getReviewById, createReview, updateReview, deleteReview }

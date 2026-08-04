import api from '@/shared/services/api'
import type { Review } from '../interfaces/review-interface'

const getReviews = async (): Promise<Review[]> => {
  const response = await api.get('/reviews')
  console.log(response.data.data)
  return response.data.data
}

export { getReviews }

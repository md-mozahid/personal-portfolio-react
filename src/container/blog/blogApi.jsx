import axiosInstance from '../../utils/axios'

export const getPosts = async () => {
  const response = await axiosInstance.get('/posts')
  return response.data
}

import axiosInstance from '../../utils/axios'

export const getPosts = async (id) => {
  // const response = await axiosInstance.get(`/posts/${id}`)
  const response = await axiosInstance.get('/posts')
  return response.data
}

import client from './client'
import { News } from '../../types/blog'

export default defineEventHandler( async (e) => {
  const params = getQuery(e)
  const slug = params.slug
  const data = client.getListDetail<News>({
    endpoint:'news',
    contentId: String(slug)
  })

  return data
})

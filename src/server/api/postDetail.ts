import client from './client'
import { Post } from '../../types/blog'

export default defineEventHandler( async (e)=> {
  const params = getQuery(e)
  const slug = params.slug
  const data = client.getListDetail<Post>({
    endpoint:'post',
    contentId: String(slug)
  })
  return data
})

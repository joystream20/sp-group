import client from './client'
import { Topics } from '../../types/blog'

export default defineEventHandler( async (e)=> {
  const params = getQuery(e)
  const slug = params.slug
  const data = client.getListDetail<Topics>({
    endpoint:'topics',
    contentId: String(slug)
  })
  return data
})

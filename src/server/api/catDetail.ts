import client from './client'
import { Category } from '../../types/blog'

export default defineEventHandler( async (e)=> {
  const params = getQuery(e)
  const catId = params.catId
  const data = client.getListDetail<Category>({
    endpoint:'category',
    contentId: String(catId)
  })
  return data
})

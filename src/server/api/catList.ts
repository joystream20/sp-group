import client from './client'
import { Category } from '../../types/blog'

export default defineEventHandler(async(event) => {
  const queries = getQuery(event)
  // const queries = {
  //   limit: 100,
  //   belongsTo
  // }
  const data = await client.getList<Category>({
    endpoint:'category',
    queries: queries
  })

  return data
})

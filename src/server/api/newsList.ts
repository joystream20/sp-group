import client from './client'
import { News } from '../../types/blog'

export default defineEventHandler( async (e) => {
  const queries = getQuery(e)
  const data = await client.getList<News>({
    endpoint: 'news',
    queries: queries
  })
  return data
})

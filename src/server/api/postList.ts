import client from './client'
import { Post } from '../../types/blog'

export default defineEventHandler(async(e) => {
  const queries = getQuery(e)
  const data = await client.getList<Post>({
    endpoint: 'post',
    queries: queries
    // queries:{
    //   filters: 'publishedAt[contains]2022'
    // }
    // queries:{orders:'publishedAt'}
  })
  return data
})

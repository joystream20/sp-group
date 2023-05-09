import client from './client'
import { Topics } from '../../types/blog'

export default defineEventHandler(async(e) => {
  const queries = getQuery(e)
  const data = await client.getList<Topics>({
    endpoint: 'topics',
    queries: queries
    // queries:{
    //   filters: 'publishedAt[contains]2022'
    // }
    // queries:{orders:'publishedAt'}
  })
  return data
})

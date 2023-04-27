import client from './client'
import { Tag } from '../../types/blog'

export default defineEventHandler(async(event) => {
  const queries = getQuery(event)
  // const queries = {
  //   limit: 100,
  //   belongsTo
  // }
  const data = await client.getList<Tag>({
    endpoint:'tag',
    queries: queries
  })

  return data
})

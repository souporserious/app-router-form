import { cache } from 'react'

export const getUser = cache(async (userId: number, role: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((json) => json.name)
})

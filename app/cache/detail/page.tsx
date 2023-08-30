import { getUser } from './utils'

export default async function Page() {
  const user = await getUser(1, 'admin')
  // await new Promise((resolve) => setTimeout(resolve, 4000))
  return <div>Detail User: {user}</div>
}

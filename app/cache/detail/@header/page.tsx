import { getUser } from '../utils'

export default async function Header() {
  const user = await getUser(1, 'admin')
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <header style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      Header User: {user}
    </header>
  )
}

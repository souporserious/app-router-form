import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h2>Home</h2>
      <Link href="/list">Go to list</Link>
    </div>
  )
}

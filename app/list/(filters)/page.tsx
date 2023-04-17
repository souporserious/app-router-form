import Link from 'next/link'

export default function Page({ searchParams }) {
  return (
    <div>
      <h2>List</h2>
      {['a', 'b', 'c'].map((item) => (
        <div key={item}>
          <Link href={`/list/${item}`}>{item}</Link>
        </div>
      ))}

      <h3>Search Params</h3>
      <code>{JSON.stringify(searchParams, null, 2)}</code>
    </div>
  )
}

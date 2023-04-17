export default function Page({ searchParams }) {
  return (
    <div>
      <h2>List</h2>
      {JSON.stringify(searchParams)}
    </div>
  )
}

import { List } from './list'

const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon'
const PAGE_SIZE = 10

export default async function Page({ searchParams }) {
  const data = (await (
    await fetch(`${POKEMON_API}?limit=${PAGE_SIZE}`)
  ).json()) as {
    count: number
    next: string
    previous: null | string
    results: {
      name: string
      url: string
    }[]
  }

  return (
    <div>
      <h2>List</h2>
      <List results={data.results} nextUrl={data.next} />

      <h3>Search Params</h3>
      <code>{JSON.stringify(searchParams, null, 2)}</code>
    </div>
  )
}

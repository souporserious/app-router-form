import Link from 'next/link'

const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon'
const PAGE_SIZE = 10

export default async function Page({
  searchParams,
}: {
  searchParams: { query?: string; offset?: number }
}) {
  const offset = Number(searchParams.offset ?? 0)
  const pagesToFetch = Array.from(
    { length: Math.ceil((offset + PAGE_SIZE) / PAGE_SIZE) },
    (_, index) => {
      return `${POKEMON_API}?limit=${PAGE_SIZE}&offset=${PAGE_SIZE * index}`
    }
  )
  const allPokemon = (
    await Promise.all(
      pagesToFetch.map(async (page) => (await fetch(page)).json())
    )
  ).flatMap((response) => response.results)

  return (
    <>
      <h2>Pokemon</h2>
      {allPokemon.map((pokemon) => (
        <div key={pokemon.name}>
          <Link href={`/${pokemon.name}`}>{pokemon.name}</Link>
        </div>
      ))}
      <Link href={`/?offset=${offset + PAGE_SIZE}`}>Show More</Link>
    </>
  )
}

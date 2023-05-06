import Link from 'next/link'

const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon'
const PAGE_SIZE = 10

export default async function Page({
  searchParams,
}: {
  searchParams: { query?: string; offset?: number }
}) {
  const offset = Number(searchParams.offset ?? 0)
  const res = await fetch(`${POKEMON_API}?limit=${PAGE_SIZE}&offset=${offset}`)
  const { results: allPokemon } = await res.json()
  const DynamicPreviousTag = offset === 0 ? "button" : Link

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        gap: '0.75rem',
      }}
    >
      <h2 style={{ margin: 0 }}>Pokemon</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {allPokemon.map((pokemon) => (
          <div key={pokemon.name}>
            <Link href={`/${pokemon.name}`}>{pokemon.name}</Link>
          </div>
        ))}
      </div>
      <div style={{ height: '1rem' }}>
        <DynamicPreviousTag
          href={`/?offset=${offset - PAGE_SIZE}`}
          disabled={offset === 0}
          style={{
            display: 'inline-block',
            cursor: offset === 0 ? 'not-allowed' : 'pointer',
            padding: '0.5rem',
            border: '1px solid black',
            textDecoration: 'none',
          }}
        >
          &lt; Previous
        </DynamicPreviousTag>
        <Link
          href={`/?offset=${offset + PAGE_SIZE}`}
          style={{
            display: 'inline-block',
            padding: '0.5rem',
            border: '1px solid black',
            textDecoration: 'none',
          }}
        >
          Next &gt;
        </Link>
      </div>
    </div>
  );
}

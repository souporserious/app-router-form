'use client'
import Link from 'next/link'
import { useState } from 'react'

export function List({
  results: initialResults,
  nextUrl: initialNextUrl,
}: {
  results: { name: string; url: string }[]
  nextUrl: string
}) {
  const [nextUrl, setNextUrl] = useState(initialNextUrl)
  const [results, setResults] = useState(initialResults)
  const [fetching, setFetching] = useState(false)

  function fetchResults() {
    setFetching(true)

    fetch(nextUrl).then(async (response) => {
      const data = await response.json()
      setNextUrl(data.next)
      setResults((results) => [...results, ...data.results])
      setFetching(false)
    })
  }

  return (
    <>
      {results.map((pokemon) => (
        <div key={pokemon.name}>
          <Link href={`/list/${pokemon.name}`}>{pokemon.name}</Link>
        </div>
      ))}
      <button onClick={fetchResults}>
        Load More {fetching ? '...' : null}
      </button>
    </>
  )
}

'use client'
import * as React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export function Form() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = React.useState(searchParams.get('query') || '')
  const [isPending, startTransition] = React.useTransition()

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const queryParams = new URLSearchParams(
          Array.from(formData, ([key, value]) => [
            key,
            typeof value === 'string' ? value : value.name,
          ])
        ).toString()
        const url = new URL(window.location.origin + window.location.pathname)

        url.search = queryParams

        startTransition(() => {
          router.push(url.href)
        })
      }}
    >
      <input
        type="text"
        name="query"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {isPending ? 'Loading...' : null}
    </form>
  )
}

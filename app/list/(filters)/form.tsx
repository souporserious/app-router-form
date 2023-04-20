'use client'
import * as React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export function Form() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = React.useState(searchParams.get('query') || '')
  const [fruit, setFruit] = React.useState(searchParams.get('fruit') || '')
  const [vegetable, setVegetable] = React.useState(
    searchParams.get('vegetable') || ''
  )
  const [isPending, startTransition] = React.useTransition()
  const updateVegetable = React.useCallback((value) => {
    const input = document.querySelector(
      'input[name="vegetable"]'
    ) as HTMLInputElement

    /* Set the hidden input value immediately so when we request submission the form values are up to date. */
    input.value = value

    input.form.requestSubmit()

    setVegetable(value)
  }, [])

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
      <h3>Search</h3>
      <input
        type="text"
        name="query"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <h3>Fruits</h3>
      <select
        name="fruit"
        value={fruit}
        onChange={(event) => {
          setFruit(event.target.value)
          event.target.form.requestSubmit()
        }}
      >
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>

      <h3>Vegetables</h3>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'row',
          listStyle: 'none',
          padding: 0,
          margin: 0,
          gap: '0.5rem',
        }}
      >
        <li>
          <button type="button" onClick={() => updateVegetable('broccoli')}>
            Broccoli {vegetable === 'broccoli' ? '✅' : null}
          </button>
        </li>
        <li>
          <button type="button" onClick={() => updateVegetable('carrot')}>
            Carrot
            {vegetable === 'carrot' ? '✅' : null}
          </button>
        </li>
        <li>
          <button type="button" onClick={() => updateVegetable('potato')}>
            Potato
            {vegetable === 'potato' ? '✅' : null}
          </button>
        </li>
      </ul>
      <input name="vegetable" type="hidden" value={vegetable} />

      <div style={{ height: '1rem' }}>{isPending ? 'Loading...' : null}</div>
    </form>
  )
}

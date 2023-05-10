'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { useLayoutEffect, useState } from 'react'
import Link from 'next/link'

export function ShowMore({ href }: { href: string }) {
  const [offset, setOffset] = useState(1)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const nextSearchParams = new URLSearchParams(Array.from(searchParams))

  nextSearchParams.set('infinite', String(offset))

  useLayoutEffect(() => {
    if (searchParams.has('infinite')) {
      const url = new URL(pathname, window.location.origin)

      nextSearchParams.delete('infinite')

      url.search = nextSearchParams.toString()

      // Mutate the URL without triggering a navigation event
      // Note, this causes the URL to be out of sync with Next.js
      window.history.replaceState({}, '', url.href)

      setOffset((offset) => offset + 1)
    }
  }, [pathname, searchParams])

  return (
    <Link href={`${href}?${nextSearchParams}`} replace>
      Show More
    </Link>
  )
}

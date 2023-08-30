import { Suspense } from 'react'

export default async function Layout({
  children,
  header,
}: {
  header: React.ReactNode
  children: React.ReactNode
}) {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <>
      <Suspense fallback="Loading header page..">{header}</Suspense>
      {children}
    </>
  )
}

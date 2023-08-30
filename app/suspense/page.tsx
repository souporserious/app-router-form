import { Suspense, unstable_SuspenseList as SuspenseList } from 'react'

export default function SuspensePage() {
  return (
    <div>
      <SuspenseList revealOrder="forwards" tail="hidden">
        <Suspense fallback="One loading...">
          <One />
        </Suspense>
        <Suspense fallback="Two loading...">
          <Two />
        </Suspense>
        <Suspense fallback="Three loading...">
          <Three />
        </Suspense>
      </SuspenseList>
    </div>
  )
}

async function One() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return <div>One</div>
}

async function Two() {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return <div>Two</div>
}

async function Three() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return <div>Three</div>
}

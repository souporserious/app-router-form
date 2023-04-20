import { Counter } from './counter'

export const metadata = {
  title: 'App Router Form',
  description: 'Example persisting form state between pages',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <h1>App Header</h1>
          <Counter />
        </header>
        {children}
      </body>
    </html>
  )
}

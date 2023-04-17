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
        <header>
          <h1>App Header</h1>
        </header>
        {children}
      </body>
    </html>
  )
}

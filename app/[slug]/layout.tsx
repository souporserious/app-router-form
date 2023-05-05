export default function DetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h2>Detail Page</h2>
      {children}
    </>
  )
}

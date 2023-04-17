import { Form } from './form'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Form />
      {children}
    </>
  )
}

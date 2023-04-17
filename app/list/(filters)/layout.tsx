import { Form } from './form'

export default function ListLayout({
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

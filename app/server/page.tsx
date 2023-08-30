import { Button } from './Button'

export default function Page() {
  async function getServerSideProps() {
    'use server'
    return { from: 'server' }
  }
  return (
    <div>
      <Button onClick={getServerSideProps}>Get Server Side Props</Button>
    </div>
  )
}

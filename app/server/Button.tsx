'use client'

export function Button({ children, onClick }) {
  return (
    <button
      onClick={async () => {
        const props = await onClick()
        console.log('props', props)
      }}
    >
      {children}
    </button>
  )
}

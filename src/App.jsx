import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-full grid place-items-center bg-slate-950 text-white'>
        <h1 className='font-bold text-7xl'>Hello World</h1>
      </div>
    </>
  )
}

export default App

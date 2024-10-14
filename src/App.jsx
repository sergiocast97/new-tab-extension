import { useState } from 'react'
import Clock from './components/clock'
import BackgroundImage from './components/backgroundImage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="relative w-full h-screen bg-theme-darkest text-theme-white">

        <div className='relative z-10 grid w-full h-full text-center pointer-events-none place-items-center'>
          <Clock />
        </div>
        
        <div className="absolute inset-0 z-0">
          <BackgroundImage />
        </div>
        
      </div>
    </>
  )
}

export default App

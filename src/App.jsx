import { useState } from 'react'
import Clock from './components/clock'
import BackgroundImage from './components/backgroundImage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen w-full bg-slate-950 relative text-white">

        <div className='z-10 relative w-full h-full  grid place-items-center text-center '>
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

import { useState, useEffect } from 'react'
import Calendar from './components/calendar'
import Clock from './components/clock'
import Background from './components/background'

function App() {

    const [ date, setDate ] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    })

    return (
        <>
            <div className="relative grid w-full h-screen bg-theme-darkest text-theme-white place-items-center">

                <div className='relative z-10 flex flex-col items-center justify-center gap-2 text-center'>
                    <Calendar date={date} />
                    <Clock date={date} />
                </div>
                
                <div className="absolute inset-0 z-0">
                    <Background />
                </div>
                
            </div>
        </>
    )
}

export default App

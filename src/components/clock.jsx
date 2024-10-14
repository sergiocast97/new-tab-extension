import { useEffect, useState } from 'react'

export default function Clock({ props }){

    const [ time, setTime ] = useState({
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
    })
  
    useEffect(() => {
        setInterval(() => {

            const date = new Date()
            
            setTime({
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds()
            })

        }, 1000)
    })

    const toTwoDigits = (value) => {
        return value.toLocaleString('en-UK', {
            minimumIntegerDigits: 2
        })
    }

    return (
        <>
            <p className="text-6xl font-semibold text-theme-white md:text-8xl lg:text-9xl drop-shadow-lg ">
                <span>{ toTwoDigits(time.hours) }</span>
                <span className="animate-separator">:</span>
                <span>{ toTwoDigits(time.minutes) }</span>
            </p>
        </>
    )
}
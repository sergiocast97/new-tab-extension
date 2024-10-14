import { useState } from 'react';

export default function BackgroundImage(){

    const [ background, setBackground ] = useState("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

    const handleClick = () => {
        setBackground("https://images.unsplash.com/photo-1726853522009-8dc4c4e306a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    }

    return(
        <>
            <img
                className="object-cover w-full h-full" 
                alt="Background Image"
                src={ background }
                onClick={handleClick}
                />
        </>
    )
}
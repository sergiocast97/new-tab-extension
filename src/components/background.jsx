import { useState, useEffect } from 'react';
import { pictureList } from './images';

export default function Background(){

    const [ position, setPosition ] = useState(Math.floor(Math.random() * pictureList.length))

    return(
        <>
            <img
                className="object-cover w-full h-full" 
                alt="Background Image"
                src={ pictureList[position].img }
                />
        </>
    )
}
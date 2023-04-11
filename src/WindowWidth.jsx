import React, { useEffect, useState } from 'react'
import './WindowWidth.css'
function WindowWidth() {
    const [WindowWidth,setWindowWidth] = useState(window.innerWidth)
    const handleWidth = () =>{
        setWindowWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize',handleWidth)
        return (()=>{
            window.removeEventListener('resize',handleWidth)//whenever component unmounted this return is gonna be called and removed the event listener
        })
    })

  return (
    <div className='widthContainer'>
        <h1 className='checkWidthHeading'>Resize TO Check Width : </h1>
        <h3>{WindowWidth}</h3>
      
    </div>
  )
}

export default WindowWidth

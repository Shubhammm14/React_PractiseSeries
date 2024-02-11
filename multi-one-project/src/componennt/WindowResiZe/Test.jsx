import React from 'react'
import useWindowResize from './Index'

const Test = () => {
    const {width,height}=useWindowResize()
  return (
    <div>
        <h1>window custom hook</h1>
        <p>width : {width}</p>
        <p>height : {height}</p>
    </div>
  )
}

export default Test
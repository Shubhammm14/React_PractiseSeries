import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userId}=useParams()
  return (
    
    <div className='text-3xl bg-orange-100 p-5'> {userId}</div>
  )
}

export default User
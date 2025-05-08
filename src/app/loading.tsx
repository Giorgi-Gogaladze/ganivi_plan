import React from 'react'
import { PropagateLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className='w-full h-screen bg-[var(--background)] flex items-center justify-center'>
            <PropagateLoader color='#1da1f2'/>
        </div>
  )
}

export default Loading
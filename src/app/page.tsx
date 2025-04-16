import Image from 'next/image'
import React from 'react'
const page = () => {
  return (
    <main className='w-full h-auto mt-6'>
      <div className='w-full h-full flex flex-col gap-5'>
        <div className='w-full max-h-[80vh] overflow-hidden'>
          <Image
          src={'/images/uni.jpg'}
          alt='image'
          width={1500}
          height={1500}
          className='w-full h-full object-cover' />
        </div>
      </div>
      <article>
        some text here
      </article>
    </main>
  )
}

export default page
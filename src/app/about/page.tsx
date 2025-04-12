import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <figcaption className='my-[3rem] '>
      <div className='relative w-full max-h-[80vh] grid grid-cols-9 gap-[1rem] overflow-hidden'>
        <div className='overlay col-span-4 h-full'>
          <Image 
          src={'/images/first-building.jpg'}
          alt='about us'
          width={1000}
          height={1000}
          className='w-full h-full object-cover object-top' />
        </div>
        <div className='col-span-1'>
          <div className='absolute top-[-30px] left-[25%] flex flex-col z-30 px-[1rem]'>
                <h1 className='font-firago text-[9vw] font-bold text-[var(--foreground)]'>About Us</h1>
          </div>
        </div>

        <section className='col-span-4 w-full h-full pr-[4rem] pt-[11rem]'>
          <div className='flex flex-col gap-[1.5rem] items-center'>
            <p className='text-[14px] font-sans text-[var(--third-text-color)] leading-[1.5rem]'>The Ganivi building feels like a maze
               — and for first-year students, it`s basically a rite of passage to get lost in it. With all the
                winding hallways, unexpected turns, and lookalike doors, finding your classroom can be a daily 
                challenge.<br />
                That`s exactly why we created this project. Our indoor plan helps you explore the building
                 with ease, showing you exactly where you need to go without the guesswork. No more wandering, no 
                 more panicking between lectures — just a clear path through the maze, right at your fingertips.
            </p>
            <div className='w-[60px] h-[60px] overflow-hidden bg-white rounded-full'>
              <Image
              src={'/images/icon.png'}
              alt='logo'
              width={1200}
              height={1200}
              className='w-full h-full object-cover object-center rounded-full'
              />
            </div>

          </div>
        </section>
      </div>
   
    </figcaption>
  )
}

export default AboutUs
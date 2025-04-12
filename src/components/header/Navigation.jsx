'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaSun } from 'react-icons/fa'
import Authentication from '@/components/authentication/Authentication'
import Image from 'next/image'
import { BsMoonStarsFill } from 'react-icons/bs'

const Navigation = () => {
const[theme, setTheme] = useState('dark');
const[isLoginModalOpen, setIsLoginModalOpen] = useState(false);

const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
}
useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(`${theme}-mode`)
},[theme])

const openLoginMoadl = () => {
    setIsLoginModalOpen((prevState) => !prevState);
}


  return (
    <section className='w-full h-[40px] mt-6'>
        <div className='w-full h-full flex justify-between items-center'>
            <Link href={'/'} >
                <div className='flex gap-2 items-center'>
                    <div className='w-[40px] h-[40px] overflow-hidden bg-white rounded-full'>
                        <Image
                        src={'/images/icon.png'}
                        alt='logo'
                        width={1200}
                        height={1200}
                        className='w-full h-full object-cover object-center rounded-full'
                        />
                    </div>
                    <h1 className=' font-firago font-semibold text-[24px] tracking-[1.2] hover:text-[var(--hover-color-primary)] 
                    transition-colors duration-300'>
                        GANIVI-PLAN
                    </h1>
                </div>
            </Link>
            <div className='w-[18rem]'>
                <div className='flex justify-between items-center h-full'>
                    <div
                    title={`change theme to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    onClick={handleThemeToggle}
                    className='cursor-pointer hover:text-[var(--hover-color-toggle)] transition-color duration-300'
                    >
                        {theme === 'light' ? <BsMoonStarsFill /> : <FaSun />}
                    </div>
                    <Link href={'/about'} className=' font-firago font-semibold text-[16px] cursor-pointer tracking-[1.2]
                     hover:text-[var(--hover-color-primary)] transition-colors duration-300'>
                        <div>About Us</div>
                    </Link>
                    <div 
                    title='Login to see your subjects table'
                    onClick={openLoginMoadl}
                    className=' flex justify-center items-center w-[100px] h-[30px] rounded-full text-white bg-twitter-blue 
                    font-firago text-[16px] cursor-pointer shadow-md hover:shadow-lg hover:shadow-twitter-blue/50 transition-all duration-300'>
                        Log In
                    </div>
                </div>
            </div>
        </div>
        {isLoginModalOpen && 
        <Authentication 
        openLoginMoadl={openLoginMoadl} />}
    </section>
  )
}

export default Navigation
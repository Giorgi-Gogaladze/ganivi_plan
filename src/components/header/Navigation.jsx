'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import Authentication from '@/components/authentication/Authentication'
import { FcMindMap } from 'react-icons/fc'

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
                <div className='flex gap-1 items-center'>
                    <FcMindMap
                    className='text-[32px]'
                     />
                    <h1 className=' font-firago font-semibold text-[24px] tracking-[1.2] hover:text-[var(--hover-color-primary)] 
                    transition-colors duration-300'>
                        GANIVI-PLAN
                    </h1>
                </div>
            </Link>
            <div className='w-[18rem]'>
                <div className='flex justify-between items-center h-full'>
                    <div
                    onClick={handleThemeToggle}
                    className='cursor-pointer hover:text-[var(--hover-color-toggle)] transition-color duration-300'
                    >
                        {theme === 'light' ? <FaMoon /> : <FaSun />}
                    </div>
                    <Link href={'/about'} className=' font-firago font-semibold text-[16px] cursor-pointer tracking-[1.2]
                     hover:text-[var(--hover-color-primary)] transition-colors duration-300'>
                        <div>About Us</div>
                    </Link>
                    <div 
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
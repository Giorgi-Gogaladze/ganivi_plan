import React from 'react'
interface Props {
  openLoginMoadl: () => void;
}


const Authentication:React.FC<Props>= ({openLoginMoadl}) => {
  return (
    <main 
    onClick={openLoginMoadl}
    className='rlaltive w-full min-h-[80vh] bg-[var(--blurrer-bg)] backdrop-blur-sm mt-6 flex  justify-center items-center z-40'>
        <div 
        onClick={(e) => e.stopPropagation()}
        className='w-[400px]  h-[350px] flex flex-col items-center justify-around bg-[var(--basic)] 
        shadow-lg py-[30px] gap-4 z-50'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <h1 className='text-[var(--background)] font-firago text-[32px] tracking-[0.1rem] font-extralight'>AUTHENTICATE</h1>
                <p 
                className='text-[var(--second-text-color)] font-sans text-[12px]  font-extralight'>
                    Please enter your 
                    <a 
                    href='https://uni.tsu.ge' 
                    target='_blank'
                    className='text-twitter-blue underline italic'
                    > uni.tsu.ge </a> 
                    username and password 
                </p>
            </div>
            <form 
            className='text-center w-full flex flex-col items-center gap-4 '>
                <input 
                type="text"
                placeholder='Username'
                className='flex items-center justify-center w-[220px] h-[40px] border rounded-full 
                border-blue-400 text-[var(--second-text-color)] text-center placeholder:text-center'  />

                <input 
                type="text"
                placeholder='Password'
                className='flex items-center justify-center w-[220px] h-[40px] border rounded-full 
                border-blue-400 text-[var(--second-text-color)] text-center placeholder:text-center' />
            </form>
            <button
            className='h-[40px] w-[110px] flex items-center justify-center border rounded-full 
                border-green-400 text-[var(--text-color)] bg-[var(--background)] cursor-pointer hover:scale-[1.1] transition-transform duration-300'>
                Login
            </button>
        </div>
    </main>
  )
}

export default Authentication
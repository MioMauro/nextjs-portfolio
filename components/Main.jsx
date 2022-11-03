import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='tracking-widest text-gray-7s00'>LET'S BUILD SOMETBING TOGETHER</p>
                <h1 className='py-4 text-5xl text-gray-600'>Hi, I'm <span className='text-[#5651e5]'>Clint</span></h1>
                <h2 className='py-2 text-3xl text-gray-600'>A Front-End Web Developer</h2>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>Follow along as I Build a NEXT JS Portfolio Website With Tailwind CSS. I wanted to update the portfolio and since I am starting to learn Next JS I thought I would build the new version with Next JS using Tailwind CSS for the styling.</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                        </div>
                    </div>
            </div>
        </div>
    </div>
)
}

export default Main
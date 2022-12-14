import React from 'react'
import Image from 'next/image'
import html from '../public/assets/skills/html.png'
import css from '../public/assets/skills/css.png'
import javascript from '../public/assets/skills/javascript.png'
import react from '../public/assets/skills/react.png'
import tailwind from '../public/assets/skills/tailwind.png'
import firebase from '../public/assets/skills/firebase.png'
import mongo from '../public/assets/skills/mongo.png'
import nextjs from '../public/assets/skills/nextjs.png'



const Skills = () => {
return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest text-[#5651e5]'>SKILLS</p>
        <h2 className='py-4'>What I can do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>


            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={html}
                        alt='/'                        
                        />
                            <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                            </div>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={css}
                        alt='/'                        
                        />
                            <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                            </div>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={javascript}
                        alt='/'                        
                        />
                            <div className='flex flex-col items-center justify-center'>
                            <h3>javascript</h3>
                            </div>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={react}
                        alt='/'                        
                        />
                            <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                            </div>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={tailwind}
                        alt='/'                        
                        />
                            <div className='flex flex-col items-center justify-center'>
                            <h3>TailwindCss</h3>
                            </div>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={firebase}
                        alt='/'                        
                        />
                            <div className='flex flex-col items-center justify-center'>
                            <h3>Firebase</h3>
                            </div>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={mongo}
                        alt='/'                        
                        />
                            <div className='flex flex-col items-center justify-center'>
                            <h3>MongoDb</h3>
                            </div>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={nextjs}
                        alt='/'                        
                        />
                            <div className='flex flex-col items-center justify-center'>
                            <h3>Next.js</h3>
                            </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
)
}

export default Skills
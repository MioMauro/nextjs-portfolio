import React from 'react'
import property from '../public/assets/projects/property.jpg'
import ProjectItems from './ProjectItems'
import crypto from '../public/assets/projects/crypto.jpg'
import netflix from '../public/assets/projects/netflix.jpg'
import twitch from '../public/assets/projects/twitch.jpg'

const Projects = () => {
return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-2xl tracking-widest text-[#5651e5]'>Projects</p>
            <h2 className='py-4 text-xl'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>


                    <ProjectItems
                    title='Property Finder'
                    backgroundImg={property}
                    projectUrl='/property'
                    />

                    <ProjectItems
                    title='Cripto App'
                    backgroundImg={crypto}
                    projectUrl='/crypto'
                    />

                    <ProjectItems
                    title='Netflix'
                    backgroundImg={netflix}
                    projectUrl='/netflix'
                    />

                    <ProjectItems
                    title='twitch'
                    backgroundImg={twitch}
                    projectUrl='/twitch'
                    />


                </div>
        </div>
    </div>
)
}

export default Projects
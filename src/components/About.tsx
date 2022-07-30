import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#40AAE8]'>About Me</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <p>Personal blurb</p>
            </div>
        </div>
    </div>
  )
}

export default About
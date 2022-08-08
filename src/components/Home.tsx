import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'; 

const Home = () => {
  return (
    // <div name='home' className='w-full h-screen'>
    <div id={'home'} className='w-full h-screen'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-[#40AAE8]'>Hey there, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold'>Ian Shaw</h1>
          {/* change font colour to lighter */}
          <h2 className='text-4xl sm:text-7xl font-bold text-[#CBD0D3]'>Full Stack Developer</h2>
          <p className='py-4 max-w-[700px]'>I'm an agile full stack developer who upskills very quickly with commercial experience in a breadth of technology across web and mobile applications.</p>
          <div>
          <button onClick={() => window.location.replace("/#work")} className='text-black hover:text-[#CBD0D3] border-2 px-6 my-2 flex items-center hover:bg-[#438EBA]'>
            View Work  <HiArrowNarrowRight />
          </button>
        </div>
        </div>

    </div>
  )
}

export default Home
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'; 

const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p>Hey there, my name is</p>
          <h1>Ian Shaw</h1>
          <h2>Full Stack Developer</h2>
          <p>I'm a full stack developer with commercial experience in web and mobile applications.</p>
        </div>
        <div>
          <button>View Work <></></button>
        </div>
    </div>
  )
}

export default Home
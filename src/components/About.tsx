import React from 'react'
import headshot from '../assets/gradballSquare.jpg'

const About = () => {
  return (
    <div id={'about'} className='w-full h-screen'>
    {/* <div name='about' className='w-full h-screen'> */}
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#40AAE8]'>About Me</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div>
                    <img src={headshot} className='rounded-full'/>
                </div>
                <div>
                    <p>My full-stack experience is from developing a Django Python backend health web site in a team of two. This interfaced with the external MySQL database on the AWS hosted Linux server via RESTful API. The frontend utilised several Javascript frameworks for interactive charting and 3d visualisations.</p>
                    <br />
                    <p>I have a commercial track record of picking up new technologies very quickly. As showcased by within 2 months from first learning JAVA, I was aiding in development of the games on the Complete Coherence mobile App.</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About
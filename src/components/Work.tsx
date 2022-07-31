import React from 'react'
import AirBnbImg from '../assets/cryptoPriceAlertsSquare.png'
import EasyBanc from '../assets/easyBancSquare.png'
//src\assets\airbnbLogo.jpeg
//src\assets\easyBancSquare.PNG
const Work = () => {
  return (
    // <div name='work' className='w-full md:h-screen'>
    <div className='w-full md:h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#40AAE8]'>Work</p>
                
                <p> <br />// Check out some of my work <br /></p>
            </div>
{/* TODO: change to dynamically add projects - perhaps auto pull from github pinned? */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div 
                style={{ backgroundImage: `url(${AirBnbImg})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl fond-bold text-white tracking-wider'>
Crypto Price Alerts Mobile App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white '>Demo</button>  
                            </a>
                            {/* <br/> */}
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white '>Code</button>  
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{ backgroundImage: `url(${EasyBanc})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl fond-bold text-white tracking-wider'>
Facial Recognition App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://www.youtube.com/watch?v=X5m8h8OIUds&ab_channel=ShawOnTech'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white '>Demo</button>  
                            </a>
                            {/* <br/> */}
                            <a href='https://github.com/Ianshaw93/EasyBanc'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white '>Code</button>  
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Work
import React from 'react'
import DjangoArticle from '../assets/djangoJsArticle.jpeg'
import swivelCameraGif from '../assets/threeJsSwivelCamera.gif'
//src\assets\airbnbLogo.jpeg
//src\assets\swivelCameraGifSquare.PNG
const Articles = () => {
  return (
    <div name='articles' className='w-full md:h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#40AAE8]'>Articles</p>
                
                <p> <br />// Check out my Medium Articles <br /></p>
            </div>
{/* TODO: change to dynamically add projects - perhaps auto pull from medium with image and title? */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div 
                style={{ backgroundImage: `url(${DjangoArticle})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl fond-bold text-white tracking-wider'>
Add Javascript to Django without bootstrap
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://medium.com/javascript-in-plain-english/quickest-way-to-use-javascript-libraries-such-as-three-js-and-d3-js-in-your-django-projects-d5ebf9072f64'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white '>Read</button>  
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{ backgroundImage: `url(${swivelCameraGif})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl fond-bold text-white tracking-wider'>
Three JS 3D Scene Panoramic Camera
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://www.youtube.com/watch?v=X5m8h8OIUds&ab_channel=ShawOnTech'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white '>Read</button>  
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Articles
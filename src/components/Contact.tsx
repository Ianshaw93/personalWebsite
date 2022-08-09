import React from 'react'
// import { useHistory } from 'react-dom';

const Contact = () => {
    // const history = useHistory();

    return (
        // <div name='contact' className='w-full h-screen bg-[#CBD0D3] flex justify-center items-center p-4'>
        <div id={'contact'} className='w-full h-screen bg-[#CBD0D3] flex justify-center items-center p-4'>
            {/* <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'> */}
            {/* <form className='flex flex-col max-w-[600px] w-full'> */}
                <div className='grid grid-cols-1 pb-8 mx-auto flex items-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#40AAE8] text-[#393E41]'>Contact</p>
                    {/* <p className='text-[#393E41] py-4'>// Submit the form below or shoot me an email - ianshaw93@gmail.com</p> */}
                    <p className='text-[#393E41] py-4'>// Shoot me an email via the button below - ianshaw93@gmail.com</p>
                    <button
                        // onClick={()=> history.push("/work")}
                        onClick={(e) => {
                            window.location.href='mailto:ianshaw93@gmail.com'
                        }} 
                        className='text-[#393E41] border-2 hover:bg-[#40AAE8] hover:border-[#40AAE8] hover:text-white px-4 py-3 my-8 mx-auto flex items-center'
                        >
                            Let's Collaborate
                    </button>
                </div>
                {/* <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows={10} placeholder='Message'></textarea>
                <a href="mailto:ianshaw93@gmail.com"> */}
                    {/* <button
                        // onClick={()=> history.push("/work")}
                        onClick={(e) => {
                            window.location.href='mailto:ianshaw93@gmail.com'
                        }} 
                        className='text-[#393E41] border-2 hover:bg-[#40AAE8] hover:border-[#40AAE8] hover:text-white px-4 py-3 my-8 mx-auto flex items-center'
                        >
                            Open email & Let's Collaborate
                    </button> */}
                {/* </a>
            </form> */}
        </div>
      )
}

export default Contact
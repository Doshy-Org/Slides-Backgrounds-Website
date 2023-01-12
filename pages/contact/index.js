import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
function index() {
  return (
    <>
        <Navbar active = "Contact"></Navbar> 
        <div className='bg-white h-screen w-full flex flex-col'>
            <div className='grow flex flex-col items-center justify-center space-y-3 text-lg'>
                <img src='/icons/profile.png' className='rounded-full'></img>
                <div className='text-3xl font-bold text-gray-800'>Contact</div>
                <a href='mailto:contact@doshy.org' className = 'text-blue-500 underline'>contact@doshy.org</a>
                
                <div className='text-3xl font-bold text-gray-800'>Github</div>
                <a href='https://github.com/Doshy-Org' className = 'text-blue-500 underline' target = "_blank">Doshy</a>
                <a href='https://github.com/Doshy-Org/Slides-Background' className = 'text-blue-500 underline' target= "_blank">Slides Background</a>

                <div className='text-3xl font-bold text-gray-800'>The Developers</div>
                <a href='https://github.com/albertsun0' className = 'text-blue-500 underline' target = "_blank">Albertsun0</a>
                <a href='https://github.com/phisv' className = 'text-blue-500 underline' target= "_blank">Phisv</a>
            </div>
            <Footer></Footer>
        </div>  
        
    </>
  )
}

export default index
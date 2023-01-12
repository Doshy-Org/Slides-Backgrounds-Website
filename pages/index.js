import { Montserrat } from '@next/font/google'
import Navbar from '../components/navbar'
import Button from '../components/button'
import Footer from '../components/footer'

import React, {useState, useEffect} from 'react'
import { useSpring, animated } from '@react-spring/web'

const colors = [
  ["#1976D2","#607D8B","#BBDEFB","#2196F3","#536DFE","#BDBDBD"],
  ["#FE9400","#283339","#19272F","#32434A"],
  ["#9cfdd2","#c4fce9","#dce9de","#1463f5","#6ab0fc","#6c73fc","#7094c9"],
  ["#9cfda1","#9cfdd2","#283339","#19272F","#32434A"],
  ["#B3E5FC","#0288D1","#0097A7","#D4E157","#43A047","#81C784","#FFEE58","#FF8F00","#E65100"],
  ["#D4E157","#43A047","#537234","#81C784","#FFEE58"],
  ["#fb4d18", "#bd2210","#e38839","#eda02b", "#753218","#cf9f42"],
  ["#e88146","#fdc886","#cca3ab","#e9ac8f","#5f6595","#8d90bd","#b09fc1","#fdba00","#e55542"],
  ["#767d85","#b4bab6","#838a90","#445660","#7185a6","#717d8d","#576872"],
  ["#809342","#415019","#446c25","#385b59","#656462","#1c4922","#8392a5"],
  ["#786c65","#d0b49d","#a78e58","#4e4118","#382812","#aa9788","#836b3a","#b9b66d","#8e883c","#584f4b","#21190b","#b8aaa4"],
  ["#30308c","#040405","#1a1b66","#10114f","#090a38","#5c5c99"]
];

const names = ["Sea Blue", "Dark", "Mint", "Mint Chip", "Rainbow", "Forest Green", "Appalachian Fall", "Pastel Sunset", "Pacific Fog", "Land Before Time", "Desert Stone", 
"Purple Night"];

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {

  const springs = useSpring({
    from: { y: 70, opacity: 0 },
    to: { y: 0 , opacity: 1 },
    delay: 500,
    config: {
      mass: 2,
      friction: 30,
      tension: 80,
    },
  })

  return (
    <div className = "bg-white dark:bg-stone-800 text-black dark:text-white">
      <Navbar active = "Slides Background"></Navbar>
      <div className='w-full h-screen bg-blue-100 text-white object-cover flex flex-col items-center justify-center px-2' style={{"backgroundImage": `url('/bgs/hexbg.png')`, "backgroundSize" : "cover"}}>
        <animated.div style={{...springs}}>
          <div className={`text-6xl md:text-8xl mb-6 text-center`}>Slides Background</div>
          <div className={`text-lg md:text-2xl text-center ${montserrat.className}`}>Generate Beautiful Material Backgrounds For Your Presentation</div>
        </animated.div>
      </div>
      <div className='flex lg:flex-row flex-col'>
        <div className='lg:w-7/12 bg-gray-100 dark:bg-stone-800 flex flex-col md:p-10 px-4 md:px-10'>
          <img src={'/examples/example.png'} className = "mb-10"></img>
          <div className='grow'></div>
          <img src={'/examples/example2.png'}></img>
        </div>
        <div className='lg:w-5/12 flex flex-row flex-wrap justify-center py-4'>
          <div className='w-full text-center text-2xl'>10+ Unique Themes To Choose From</div>
          {names.map((name,i) => {
            return <div className='px-6 p-2'>
              <div className='text-lg mb-2 text-center'>{name}</div>
              <div className='flex flex-row space-x-2'>
                {colors[i].map((color, ix)=> {
                  return <div className={`w-8 h-8 rounded`} style = {{"backgroundColor" : color}}></div>
                })}
              </div> 
            </div>
          })}
        </div>
      </div>
      <div className='w-full flex flex-col items-center p-10'>
        <img src='/icons/google_workspace_markeplace.png' className='mb-4'></img>
        <a className='text-xl text-gray-600 underline hover:text-blue-500' href='https://workspace.google.com/marketplace/app/slides_background/732310380877'>Now Available On the Google Workspace Markeplace!</a>
      </div>
      <div className='w-full pb-10 flex flex-row justify-center'>
          <Button name = "Online Demo" link ="extension.html"></Button>
          <div className='w-4'></div>
          <Button name = "Report a Bug" link = "https://docs.google.com/forms/d/1tVSrWPSzFkB_VtgbRTuBo2mCt5CWWLWAaVEH-Eu8Zmo/viewform?w"></Button>
      </div>
      <Footer></Footer>
    </div>
    
  )
}

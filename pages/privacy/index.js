import { Montserrat } from '@next/font/google'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

const montserrat = Montserrat({ subsets: ['latin'] })

const text = [
  {"title": "Disclaimer", "content": "We try to keep this website accurate and up-to-date, but we cannot guarantee that it’s free of errors. Therefore, we assume no liability for loss or damage of any kind incurred directly or indirectly through the use of this website. Slides Background assumes no liability for any of the websites that we link to; liability for such third-party content rests solely with their owners."},
  {"title": "Copyright and Trademarks", "content": "All text, pictures, graphics, animation, videos, sounds, and any other content of this website and their layout are protected by copyright and other intellectual property laws. Unless otherwise indicated, you may not duplicate, modify, or use our content or designs in other electronic or printed publications without the prior consent of Slides Background. In most cases, we’re delighted to give permission for you to reuse our content, so please contact us and we’ll respond quickly. Unless otherwise stated, all trademarks are protected under trademark laws, especially the Slides Background trademarks, logos, emblems, and nameplates. The trademarks presented on this website are the intellectual property of Slides Background."},
  {"title": "Data Privacy Notice", "content": "Slides Background places great importance on protecting the security and privacy of your personal data. We run our business in compliance with applicable laws on data privacy protection and data security. We will not collect, store, or use any personal data about you ever. When you access our websites, we automatically collect non-personal data such as the type of web browser and operating system used, number of visits, average time spent on the site, and pages viewed. We use this information to improve our content, our services, and our understanding of our customers." }
]

export default function Home() {
  return (
    <>
      <Navbar active = "Privacy Policy"></Navbar>
      <div className='w-full bg-blue-100 object-cover flex flex-col items-center justify-center' style={{"backgroundImage": `url('/bgs/background.png')`, "backgroundSize" : "cover"}}>
        <div className={`text-8xl mb-6 text-center p-40 py-60`}>Privacy Policy</div>
      </div>
      <div className='p-10 bg-white md:px-60'>
        {text.map((text, i) => {
          return <div className='py-4 text-black'>
            <div className='text-3xl font-bold mb-4 text-gray-700'>{text.title}</div>
            <div className='text-lg'>{text.content}</div>
          </div>
        })}
        <hr className='my-4'></hr>
        <div className='text-xl text-gray-700 font-bold mb-4'>Contacts</div>
        <a href='mailto:contact@doshy.org' className='text-blue-500 underline'>contact@doshy.org</a>
      </div>

      <Footer></Footer>
    </>
    
  )
}

import { Montserrat } from '@next/font/google'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

const montserrat = Montserrat({ subsets: ['latin'] })

const text = [
  {"title": "Installation Guide", "content": "We try to keep this website accurate and up-to-date, but we cannot guarantee that it’s free of errors. Therefore, we assume no liability for loss or damage of any kind incurred directly or indirectly through the use of this website. Slides Background assumes no liability for any of the websites that we link to; liability for such third-party content rests solely with their owners."},
  {"title": "Copyright and Trademarks", "content": "All text, pictures, graphics, animation, videos, sounds, and any other content of this website and their layout are protected by copyright and other intellectual property laws. Unless otherwise indicated, you may not duplicate, modify, or use our content or designs in other electronic or printed publications without the prior consent of Slides Background. In most cases, we’re delighted to give permission for you to reuse our content, so please contact us and we’ll respond quickly. Unless otherwise stated, all trademarks are protected under trademark laws, especially the Slides Background trademarks, logos, emblems, and nameplates. The trademarks presented on this website are the intellectual property of Slides Background."},
  {"title": "Data Privacy Notice", "content": "Slides Background places great importance on protecting the security and privacy of your personal data. We run our business in compliance with applicable laws on data privacy protection and data security. We will not collect, store, or use any personal data about you ever. When you access our websites, we automatically collect non-personal data such as the type of web browser and operating system used, number of visits, average time spent on the site, and pages viewed. We use this information to improve our content, our services, and our understanding of our customers." }
]

export default function Home() {
  return (
    <>
      <Navbar active = "Help"></Navbar>
      <div className='w-full bg-blue-100 text-gray-700 object-cover flex flex-col items-center justify-center' style={{"backgroundImage": `url('/bgs/4.png')`, "backgroundSize" : "cover"}}>
        <div className={`text-8xl mb-6 text-center p-40 py-60`}>User Guide</div>
      </div>

      <div className='p-10 bg-white md:px-60 text-black flex flex-col space-y-4'>
      <h2 className='text-3xl font-bold text-gray-700'>Installation Guide</h2>
      <ul class="list-disc ml-10 text-lg">
        <li>After installing, go to Add-ons -{'>'} Slides Background -{'>'} Generator on your Google Slides document to open the configuration sidebar.</li>
        <li>If Slides Background is not on the Add-ons menu, reload the page.</li>
        <li>Slides Background has been tested to work on Chrome, Chromium, Firefox, Opera, and Vivaldi.</li>
      </ul>
      
      <h2 className='text-3xl font-bold text-gray-700'>Select Theme</h2>
        <ul class="list-disc ml-10 text-lg">
          <li>Choose a color theme that you like by clicking on it.</li>
          <li>The 'Select Theme' menu will automatically collapse and display your chosen theme.</li>
          <li>If no theme is selected, a theme will be randomly selected and used until you choose another theme.</li>
        </ul>
      
      <h2 className='text-3xl font-bold text-gray-700'>Options</h2>
      <h3 className='ml-10 text-2xl font-bold text-gray-700'>Gray Overlap</h3>
        <ul class="list-disc ml-20 text-lg">
            <li>This value refers to the transparency of a white layer that is used to tone down the generated backgrounds.</li>
            <li>It takes input values between 0 and 1 and with up to 2 decimal places.</li>
            <li>For our brighter backgrounds, it is recommended to set the overlay to 0.3 so text on the slide is more visible.</li>
            <li>If no Gray Overlay value is set, it defaults to 0.</li>
          </ul>
      <h3 className='ml-10 text-2xl font-bold text-gray-700'>For Original Backgrounds</h3>
      <h3 className='ml-20 text-2xl font-bold text-gray-700'>Rows</h3>
        <ul class="list-disc ml-32 text-lg">
          <li>The number of rows refers to the number of rectangles displayed.</li>
          <li>It accepts input values of integers from 0 to 15.</li>
          <li>If no Row value is set, it randomly selects a value from 4 to 8 for each generated background.</li>
          <li>0 rows creates two objects with some whitespace.</li>
        </ul>

      <h3 className='ml-10 text-2xl font-bold text-gray-700'>For Hexagons Backgrounds</h3>
      <h3 className='ml-20 text-2xl font-bold text-gray-700'>Hexagon Size</h3>
        <ul class="list-disc ml-32 text-lg">
          <li>This value refers to the size of each hexagon in the tessellation.</li>
          <li>It accepts integer values from 10 to 200.</li>
          <li>If no value is set, it defaults to 20.</li>
          <li>If no value is set, it defaults to 5.</li>
        </ul>

      <h3 className='ml-20 text-2xl font-bold text-gray-700'>Color Noise</h3>
        <ul class="list-disc ml-32 text-lg">
          <li>This value refers to how much each hexagon's color may vary from the colors in the selected color theme.</li>
          <li>A higher Color Noise value would result in more random colors being shown as well as more variation between individual hexagons.</li>
          <li>It accepts integer values from 0 to 30.</li>
        </ul>


      <h2 className='text-3xl font-bold text-gray-700'>Buttons</h2>
      <h3 className='ml-10 text-2xl font-bold text-gray-700'>Generate</h3>
        <ul class="list-disc ml-20 text-lg">
          <li>Click this button to generate a new background for the current slide.</li>
          <li>Please note that it may take a couple of seconds for the image to load onto your slide.</li>
        </ul>
      <h3 className='ml-10 text-2xl font-bold text-gray-700'>Add</h3>
      <ul class="list-disc ml-20 text-lg">
          <li>Click the Add button to add the currently generated background to other slides.</li>
        </ul>
      <h3 className='ml-10 text-2xl font-bold text-gray-700'>Insert As Image</h3>
      <ul class="list-disc ml-20 text-lg">
          <li>Click the Insert As Image button to insert the current generated background as an image to any slide.</li>
        </ul>

      <h2 className='text-3xl font-bold text-gray-700'>Bug Report</h2>
      <ul class="list-disc ml-20 text-lg">
        <li>Report any bugs <a href="https://forms.gle/jmeARdGJPvvDxnKr8" className='text-blue-500 underline'>here</a></li>
        <li>For further help, contact us at <a href="mailto:contact@doshy.org">contact@doshy.org</a></li>
      </ul>
      
    </div>
      <Footer></Footer>
    </>
    
  )
}

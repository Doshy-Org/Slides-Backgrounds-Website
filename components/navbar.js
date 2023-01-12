import Image from 'next/image'
import Navitem from './navitem'
import ThemeToggle from './themeToggle'

const items = [
  {name: "Home", link: "/"}, 
  {name: "Privacy Policy", link: "/privacy"}, 
  {name: "Help", link: "/help"}, 
]

export default function navbar({active}) {
  return (
    <div className='transition-all duration-500 fixed w-full bg-white dark:bg-[#29353b] dark:text-gray-100 top-0 left-0 text-black flex flex-row shadow-md z-10 items-center'>
        {items.map((item, i) => {
          if(item.name === active){
            return <Navitem name = {item.name} active = {true} link = {item.link}></Navitem>
          }
          return <Navitem name={item.name}  link = {item.link}></Navitem>
        })}
        <div className='grow'></div>
        {active === "Contact" ? <Navitem name = "Contact" link={"/contact"} active = {true}></Navitem> : <Navitem name = "Contact" link={"/contact"}></Navitem>}
    </div>
  )
}

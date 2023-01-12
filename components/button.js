import Image from 'next/image'

export default function button({name, link}) {
  return (
    <a className='p-2 px-4 cursor-pointer rounded bg-blue-500 hover:bg-blue-300 hover:text-black transition-all duration-500' href={link} target="_blank">
        {name}
    </a>
  )
}

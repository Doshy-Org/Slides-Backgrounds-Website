import Link from 'next/link'

export default function navitem({name, link, active}) {
  return (
    <Link href={`${link}`} className={`p-2 px-4 text-md hover:bg-orange-400 ${active ? "bg-orange-400" : ""} 
      hover:cursor-pointer transition-all duration-500`}>
        {name}
    </Link>
  )
}

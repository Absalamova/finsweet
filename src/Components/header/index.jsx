import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='container mx-auto w-[1400px] flex items-center justify-between p-2 '>
        <div className='relative w-[120px] h-[70px]'>
           <Link href="/">
                 <Image fill src="/Logo.svg"  alt="logo"/>
           </Link>
        </div>
        <nav className='flex gap-[30px]  text-gray-500'>
            <Link className=' font-bold text-[18px] hover:text-blue-950' href="/about">About Us</Link>
            <Link className=' font-bold text-[18px] hover:text-blue-950' href="/careers">Careers</Link>
            <Link className=' font-bold text-[18px] hover:text-blue-950' href="/blog">Blog</Link>
            <Link className=' font-bold text-[18px] hover:text-blue-950' href="/service">Cervise</Link>
            <Link className=' font-bold text-[18px] hover:text-blue-950' href="/contact">Contact us</Link>
        </nav>
        <button className='bg-pink-50 text-orange-400  font-bold text-[18px] rounded-full px-4 py-2 hover:bg-orange-200 '>Clone project</button>
    </header>
  )
}

export default Header
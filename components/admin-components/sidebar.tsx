'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <aside className='flex flex-col bg-slate-100 h-screen sticky top-0'>
        <div className='px-2 sm:pl-14 py-8 border border-black'>
            <Image src="/logo/logoblackT.png" width={200} height={200} alt='logo'/>
        </div>
        <div className='w-28 sm:w-80 flex-1 relative py-12 border border-black'>
          <div className='w-[80%] absolute right-0'>
            <Link href='/admin/add-blog' className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] hover:shadow-[-7px_7px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200'>
              <Image src='/admin/add_icon.png' width={28} height={28} alt=''/><p>Add blogs</p>
            </Link>
            <Link href='/admin/blog-list' className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] hover:shadow-[-7px_7px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200'>
              <Image src='/admin/blog_icon.png' width={28} height={28} alt=''/><p>Blog List</p>
            </Link>
            <Link href='/admin/subscriptions' className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] hover:shadow-[-7px_7px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200'>
              <Image src='/admin/email_icon.png' width={28} height={28} alt=''/><p>Subscriptions</p>
            </Link>
          </div>
        </div>
    </aside>
  )
}

export default Sidebar
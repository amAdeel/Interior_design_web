import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='bg-black h-screen w-full text-white uppercase'>
      <div className='flex justify-center items-center h-full w-full flex-col gap-6'>  
        <div className=''>
        <h1 className='text-white uppercase text-8xl font-sans font-bold tracking-tighter text-center '>Let's Talk</h1>
        </div>
        <div className='flex gap-5 sm:flex-row flex-col '>
             <button className='border-2 border-white rounded-full p-2 px-4 uppercase'><Link href="thisisadeelashraf@gmail.com" target='Blank'>gmail</Link></button>
             <button className='border-2 border-white rounded-full p-2 px-4 uppercase'><Link href="https://www.linkedin.com/in/muhammad-adeel-aa29a923a/" target='Blank'>linkedin</Link></button>
             <button className='border-2 border-white rounded-full p-2 px-4 uppercase'><Link href="https://adeel-portfolio-one.vercel.app/" target='Blank'>portpolio</Link></button>
        </div>
      </div>  
    </section>
  )
}

export default Footer
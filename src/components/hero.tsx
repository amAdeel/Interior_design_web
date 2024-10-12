import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <main className='non-scrollbar w-full '>
        <section id='section' className='h-screen py-10 max-h-[1120px] sm:max-h-screen relative w-full justify-center flex items-center'>
            <div id='container' className='relative w-full h-full sm:px-24 px-6'>
                <Image
                src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/6016c496146799.5ea7f6d5a8144.jpg'
                alt='Hero section'
                fill
                className='w-full h-full object-cover absolute'/>

    {/* create a button and a h1 and paragraph of hero section  */}
            <div className='relative flex sm:flex-row flex-col-reverse items-start sm:items-end gap-3 xl:gap-0 sm:justify-between  w-full bottom-0 h-full'>
             <button className='text-white border-2 border-white p-1 px-3  hover:bg-white hover:text-black font-serif duration-300 rounded-full text-lg'>Explore</button>
             <div className='text-white relative flex flex-col'>
                <h1 className='font-bold text-4xl leading-none font-serif'>The Future of Architecture Design</h1>
                <p className='text-lg'>Designing your dreams into reality, one beautiful space at a time.</p>
            </div>
            </div>
            


            </div>

        </section>

    </main>
  )
}

export default Hero
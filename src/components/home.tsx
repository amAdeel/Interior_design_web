import Image from 'next/image'
import React from 'react'
import Marquee from "react-fast-marquee";
const Home = () => {
  return (
    <main className='no-scrollbar overflow-x-hidden bg-white'>
        <section id='section' className='bg-white py-6 sm:pt-10 xl:py-24 sm:h-full  sm:max-h-full  relative w-full justify-center flex items-center border-0  '>
            <div id='container' className='px-6 sm:px-24 w-full h-full flex '>
                <div className='flex flex-col h-full sm:justify-center xl:gap-12 sm:gap-10 gap-8 m-5 sm:w-2/3'>
                    <h2 className='text-xl uppercase'>Adeel FURNITURE FOR COMFORT LIVING</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius repellat est enim consequatur.</p>
                </div>
                <div className='flex flex-col items-start gap-3 sm:gap-9 xl:w-3/4 sm:w-2/4'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, corrupti doloribus est reprehenderit veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam h-full recusandae incidunt consequuntur quis laboriosam, voluptatibus, temporibus maiores soluta repellendus cum non quasi voluptates autem nulla et provident vero tenetur omnis?</p>
                    <button className='font-serif border-2 border-black p-1 px-3 rounded-full hover:bg-black hover:text-white '>Detail</button>
                </div>

            </div>

        </section>

        <section id='section' className='bg-white sm:h-full  h-fit relative border-0'>
            <div id='container' className='px-6 sm:px-10 w-full h-2/4 py-0'>
            
                    <p className='uppercase sm:text-[85vh] text-[25vh] font-mono tracking-tighter border-0'>Adeel</p>
                    <Image
                    src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1ef3b5139393621.622f38331fdf9.jpg'
                    alt='interior design'
                    width={320}
                    height={320}
                    className='absolute sm:h-2/5 h-3/5 w-2/5 sm:w-fit sm:lift-[15%] left-[20%] sm:top-72 top-16 object-cover sm:ml-36 '/>
                    <Image
                    src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/35e1fc139393621.622f38331f3e1.jpg'
                    alt='interior design'
                    width={320}
                    height={320}
                    className='absolute h-2/5 w-3/5 sm:w-fit sm:right-[15%] top-0 object-cover ml-36  hidden sm:block border-0 '/>


                
            </div>

        </section>

{/* hum hamsha yad rehky hum phele relative pass karty hai then hum absolute dety hai absolte humsha relative k lehaz sy kamkata hai mean relative parent div par apply ho ga or absolute child div par apply ho ga then abolute div ki height wedth wegara is tara move kary gi .*/}
<section id='section' className='h-full sm:h-full bg-white  flex flex-col items-center justify-center  border-0 '>
    <div>
        <button className='border-2 border-black p-1 px-2 rounded-full font-serif hover:bg-black hover:text-white'>
            See Our Work
        </button>
    </div>
    <Marquee className='w-full'speed={40} gradient={false}>
        {/* First Image - Top Center */}
        <div className='flex justify-center p-4'>
            <Image
                src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/c2c564175690747.64b7e66649811.png'
                alt='img'
                width={320}
                height={320}
                className='h-4/5 object-cover'
            />
        </div>
        {/* Second Image - Smaller and at the bottom right */}
        <div className='flex justify-center'>
            <Image
                src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/7a66cc139393621.622f38332099d.jpg'
                alt='img'
                width={320}
                height={320}
                className='h-3/5 w-3/5 object-cover'
            />
        </div>
        {/* Third Image - Positioned on the top right */}
        <div className='flex justify-center'>
            <Image
                src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/59b683191866033.65d3206452ef0.jpg'
                alt='img'
                width={320}
                height={380}
                className='h-4/5 w-2/4 object-cover'
            />
        </div>
    </Marquee>
</section>


<section id='section' className='h-full sm:h-full py-10 sm:py-24'>
    <div id='container' className=' justify-center items-center sm:justify-center sm:items-center flex flex-col gap-12'>
        <div className='flex justify-center'>
        <h1 className='text-3xl sm:text-5xl font-serif font-extrabold uppercase text-center'>Our Expertise</h1>
        </div>
        <div className='flex sm:flex-row sm:gap-24 flex-col gap-10'>
        <div className='border-4 border-black p-4 flex flex-col items-center'>
                <h1 className='text-xl font-bold mb-4'>Design Interior</h1>
                <Image 
                    src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/ec4081201637243.66c9f9779c443.jpg' 
                    alt='Design Interior' 
                    width={320} 
                    height={300} 
                    className='object-cover'
                />
             </div>
             <div className='border-4 border-black p-4 flex flex-col items-center'>
                <h1 className='text-xl font-bold mb-4'>Architecture Design</h1>
                <Image 
                    src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/9813dc201637243.6678677225469.jpg' 
                    alt='Architecture Design' 
                    width={320} 
                    height={300} 
                    className='object-cover'
                />
             </div>
        </div>
        </div>
</section>

    </main>
  )
}

export default Home
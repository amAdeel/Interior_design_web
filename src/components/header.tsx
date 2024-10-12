"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import headerData from '@/data/header.json'
const HeaderComponent = () => {
 {/* step-01 for menu bar */} const [showMenu,setshowMenu] =useState(false)
//here prev stand for previous value of showMenu


{/* step-02 */}  const handleMenu=()=>{
    console.log("click")
    setshowMenu((prev)=> !prev);
  };
  return (
    <header className='flex justify-between items-center  px-6  z-10  w-full sticky top-0 bg-black'>
    <div className='flex justify-between items-center py-3 w-full border-b-2 border-gray-300'>
      <Link href="/" className='font-serif text-white text-2xl font-bold'>Adeel</Link>
{/* is ko samj bhot zarrori hai yaha par hum ny absolute ka use kiya hai jo kaya kary ha humare content ko simple flow sy out kar dy ga or hum ab isy kahi bi use karm skaty hai , ab hum ny top-0 diya jis ka matlab hai jab true ho gi condition os time ya top of the screen show ho ga , or jab false ho ga to wo out of screen ho jy ga -top-100vh ka matlab out of screen hona ,,,,, ab yaha par hum ny sm:relative bi diya hai ab ya question aye ga k ya kaya diya ja raha hai , is me hum sirf li jo ul k under hai os ko bound kar rehy hai k wo sirf apni limt k under hi kam kary .. */}    
  {/*step-03 */}   <ul className={`text-white flex flex-col duration-300 sm:flex-row absolute  bg-black right-0 w-screen h-screen sm:h-fit sm:w-fit sm:top-0 sm:relative sm:bg-transparent gap-6 justify-center items-center ${showMenu ? 'top-0' : '-top-[100vh]'}`}>
        {headerData.header.map((item )=>{
            return(
                
                  <li key={item.id} className=' uppercase'>
                  <Link href={item.href}>{item.label}</Link>
                  </li>
                
            )
        })}
        
     </ul>
     <div className='text-white'>
{/*step-04 */}        
         <button onClick={()=> handleMenu()} className="text-white sm:hidden z-20 relative"  >
          {showMenu?"Close" : "Menu"}
          </button>
{/* here we define sm:block mean when screen is greater Jab screen ka size small ya us se bada ho (yaani 640 pixels ya us se badi screens, jaise tablets aur laptops), tab ye element block-level ban jayega aur dikhai dega. */}
          <button className='sm:block hidden border-2 border-white p-1 px-3 rounded-full hover:bg-white hover:text-black font-serif duration-300'>
            Contact Us 
          </button>
     </div>
    </div>
    </header>
  )
}

export default HeaderComponent
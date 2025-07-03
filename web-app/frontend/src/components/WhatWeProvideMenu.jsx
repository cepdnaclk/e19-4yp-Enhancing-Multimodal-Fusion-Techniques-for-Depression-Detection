import React from 'react'
import { whatWeProvide } from '../assets/assets_frontend/assets'


function WhatWeProvideMenu() {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='whatWeProvide'>
        <h1 className='text-3xl font-medium'>What We Provide</h1>
        <p className=' text-center text-sm'>
        We offer a range of services focused on supporting your mental well being from booking certified counselors and accessing AI-driven depression checks, to receiving instant support through live chats. Our goal is to make mental health care approachable, accessible, and personalized for everyone.
        </p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {whatWeProvide.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-xs  hover:translate-y-[-10px] transition-all duration-500">
                    <img src={item.image} alt={item.speciality} className="w-16 sm:w-16 mb-2" />
                    <p className="font-semibold text-sm mt-2">{item.speciality}</p>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
            ))}
        </div>


      
    </div>
  )
}

export default WhatWeProvideMenu

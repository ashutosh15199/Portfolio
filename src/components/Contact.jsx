import React from 'react'
import { contactData } from '../data/Contact'
const Contact = () => {
  return (
    <div className='min-h-screen flex flex-col gap-20 items-center justify-center'>
      <div>
        <h2 className='text-4xl font-bold text-white'>Get in Touch</h2>
      </div>
      <div className='flex flex-wrap flex-col justify-center items-center gap-6'>
        {contactData.map((items, index) => (
          <>
          <div
            key={index}
            className='relative flex items-center justify-center border-2 md:w-[500px] w-[300px]  h-[60px] gap-4 p-4 rounded-lg overflow-hidden group'
          >
            {/* Hover Background */}
            <div className='absolute top-0 left-[-100%] w-full h-full bg-[rgba(57,159,122,0.5)] transition-all duration-300 group-hover:left-0'></div>

            {/* Card Content */}
            <a
              href={items.link}
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-col items-center relative z-10'
            >
              <img
                className='w-[30px] h-[30px] mb-2 transition-all duration-300'
                src={items.image}
                alt={items.title}
              />
            </a>
            <p className='text-gray-500 font-bold text-sm relative z-10 transition-all duration-300 group-hover:text-white'>
              {items.title}
            </p>
          </div>
          
          </>
        ))}
      </div>
      <h4 className='text-xl font-bold text-white'>I'm <span className='text-green-900'>available</span> for freelancing.</h4>
    </div>
  )
}

export default Contact

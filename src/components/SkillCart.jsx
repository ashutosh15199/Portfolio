import React from 'react'
import { Data } from '../data/Skills'

const SkillCart = () => {
  if (!Data || Data.length === 0) {
    return <p>Data is not available</p>
  }

  return (
    <div className='min-h-screen flex flex-col items-center text-white'>
      {/* Heading */}
      <div className='mt-[400px] sm:mt-[80px] md:mt-20 lg:mt-28 z-10'>
        <h1 className='text-4xl font-bold text-center'>Skill</h1>
      </div>

      {/* Card Container */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 md:mt-16 lg:mt-20 w-full max-w-6xl px-4'>
        {Data.map(item => (
          <div
            key={item.title}
            className='bg-[#12161b] rounded-lg border border-gray-700 flex flex-col items-center p-6 shadow-lg'
          >
            {/* Card Title */}
            <h4 className='text-gray-300 text-lg mb-4'>{item.title}</h4>

            {/* Card Content */}
            <div className='flex flex-wrap gap-4 justify-center'>
              {item.items.map((img, index) => (
                <div key={index} className='flex flex-col items-center'>
                  <img
                    className='rounded-t-lg w-[50px] h-[50px] mb-2'
                    src={img.image}
                    alt=''
                  />
                  <p className='text-gray-500 text-sm'>{img.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillCart

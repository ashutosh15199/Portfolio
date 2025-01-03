import React from 'react'
import { serviceData } from '../data/Service'
const Services = () => {
  return (
    <div className='flex flex-col items-center pt-16 sm:mt-20'>
      <div className=''>
        <h2 className='text-4xl font-bold text-center'>Service</h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 md:mt-16 lg:mt-20 w-[800px]sm:w-[200px] max-w-6xl px-4'>
        {serviceData.map(items => (
          <div
            key={items.id}
            className='bg-[rgba(8,21,16,0.5)] hover:bg-[#12161b] rounded-lg border border-gray-700 flex flex-col p-4 shadow-lg'
          >
            {/* Card Title */}
            <div className='flex flex-wrap gap-4 justify-center'>
              {
                items.image.map(img=>(
                 <div className='flex flex-col items-center'>
                  <img className='w-[40px] h-[40px] border rounded-full'  src={img}
                alt={`technology-${items}`}/>
                </div>
                ))
              }
            </div>
            <h4 className='text-green-500 font-bold text-lg mb-4 mt-10 text-left'>{items.title}</h4>
            <p>{items.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services

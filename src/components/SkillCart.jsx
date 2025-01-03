import React from 'react'
import { Data } from '../data/Skills'

const SkillCart = () => {
  if (!Data || Data.length === 0) {
    return <p>Data is not available</p>
  }

  return (
    <div className=" flex flex-col items-center text-white mt-4 sm:mt-20 pt-16">
    {/* Heading */}
    <div>
      <h1 className="text-4xl font-bold text-center">Skill</h1>
    </div>
  
    {/* Card Container */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 md:mt-16 lg:mt-20 w-full max-w-6xl px-4">
      {Data.map(item => (
        <div
          key={item.title}
          className="bg-[rgba(8,21,16,0.5)] hover:bg-[#12161b] rounded-lg border border-gray-700 flex flex-col items-center shadow-lg"
        >
          {/* Card Title */}
          <h4 className="text-green-500 font-bold text-lg sm:mt-20">{item.title}</h4>
  
          {/* Card Content */}
          <div className="flex flex-wrap gap-4 justify-center">
            {item.items.map((img, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  className="rounded-t-lg w-[50px] h-[50px] mb-2"
                  src={img.image}
                  alt=""
                />
                <p className="text-gray-500 text-sm">{img.title}</p>
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

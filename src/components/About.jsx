import React, { useEffect, useState } from 'react'
import DevicesIcon from '@mui/icons-material/Devices'
import ConstructionIcon from '@mui/icons-material/Construction'
import PublicIcon from '@mui/icons-material/Public'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const About = () => {
  const [index, setIndex] = useState(0)
  const textArray = ['Ashutosh', '@ashutosh']
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % textArray.length)
    }, 3000)
    return () => clearInterval(timer)
  })
  return (
    <>
     <div className="flex flex-col items-center justify-center px-6 py-12 space-y-8 sm:space-y-6">
  {/* First Section: Introduction */}
  <div className="flex flex-wrap items-center justify-center gap-2 text-center">
    <h1 className="text-white font-bold md:text-[80px] sm:text-[35px]">Hii there, I am</h1>
    <span className="text-blue-400 font-bold md:text-[80px] sm:text-[35px] text-change-animation ">
      {textArray[index]}.
    </span>
  </div>

  {/* Second Section: Roles */}
  <div className="text-green-500 flex flex-wrap items-center justify-center md:gap-6 text-center md:text-lg sm:text-[7px] ml-[-21px] mr-[-5px]">
    <p className="sm:ml-[-10px] justify-start gap-2 text-green-900">
      Full Stack Developer <DevicesIcon />
    </p>
    <p className=" items-start justify-start gap-2 text-green-900">
      SDE <ConstructionIcon />
    </p>
    <p className=" items-start justify-start gap-2 text-blue-900">
      Open Source <PublicIcon />
    </p>
  </div>

  {/* Third Section: Button */}
  <div className="flex justify-center items-center">
    <a
      href="https://wa.me/9835985697" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block bg-green-500 text-white font-bold py-3 px-8 rounded overflow-hidden group"
    >
      <span className="absolute inset-0 bg-green-300 text-blue-600 transition-transform transform -translate-x-full duration-500 group-hover:translate-x-0"></span>
      Let's Talk
    </a>
  </div>
</div>
      {/* Section with Icons (GitHub, LinkedIn, WhatsApp) */}
<div className="flex items-center justify-center gap-6 text-center">
  {/* GitHub Icon */}
  <a
    href="https://github.com/ashutosh15199"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-900 hover:text-black rounded-full border-2 border-gray-900 p-4 transition transform hover:scale-110 hover:border-black duration-300"
  >
    <GitHubIcon className="text-[30px]" />
  </a>

  {/* LinkedIn Icon */}
  <a
    href="https://www.linkedin.com/in/ashutosh-kumar-tiwari-235a13201/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-black rounded-full border-2 border-blue-600 p-4 transition transform hover:scale-110 hover:border-black duration-300"
  >
    <LinkedInIcon className="text-[30px]" />
  </a>

  {/* WhatsApp Icon */}
  <a
    href="https://wa.me/9835985697"
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-500 hover:text-black rounded-full border-2 border-green-500 p-4 transition transform hover:scale-110 hover:border-black duration-300"
  >
    <WhatsAppIcon className="text-[30px]" />
  </a>
</div>

    </>
  )
}
export default About
